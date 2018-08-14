var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
var multer = require("multer");
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function(req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter });

var cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dmrien29n",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// INDEX - show all campgrounds
router.get("/", function(req, res) {
  var noMatch = null;
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), "gi");
    Campground.find({ name: regex }, function(err, allCampgrounds) {
      if (err) {
        console.log(err);
      } else {
        if (allCampgrounds.length < 1) {
          noMatch =
            "Couldn't find results for " +
            req.query.search +
            ", please try again.";
        }
        res.render("campgrounds/index", {
          campgrounds: allCampgrounds,
          noMatch: noMatch
        });
      }
    });
  } else {
    Campground.find({}, function(err, allCampgrounds) {
      if (err) {
        console.log(err);
      } else {
        res.render("campgrounds/index", {
          campgrounds: allCampgrounds,
          currentUser: req.user,
          noMatch: noMatch
        });
      }
    });
  }
});

// CREATE - add new campground to db
router.post("/", middleware.isLoggedIn, upload.single("image"), function(
  req,
  res
) {
  cloudinary.v2.uploader.upload(
    req.file.path,
    { width: 1500, height: 1000, gravity: "center", crop: "crop" },
    function(err, result) {
      if (err) {
        req.flash("error", err.message);
        return res.redirect("back");
      }
      // add cloudinary url for the image to the campground object under image property
      req.body.campground.image = result.secure_url;
      req.body.campground.imageId = result.public_id;
      var address = {
        street: req.body.campground.street,
        city: req.body.campground.city,
        state: req.body.campground.state,
        zip: req.body.campground.zip
      };
      req.body.campground.address = address;
      var booking = {
        start: req.body.campground.start,
        end: req.body.campground.end
      };
      req.body.campground.booking = booking;
      var result;
      result = req.body.campground.tags.split(",");
      req.body.campground.tags = result;
      // add author to campground
      req.body.campground.author = {
        id: req.user._id,
        username: req.user.username
      };
      Campground.create(req.body.campground, function(err, campground) {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("back");
        }
        res.redirect("/campgrounds");
      });
    }
  );
});

// NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/new");
});

// SHOW - shows more information about one campground
router.get("/:id", function(req, res) {
  Campground.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundCampground) {
      if (err || !foundCampground) {
        console.log(err);
        req.flash("error", "Sorry, that campground does not exist!");
        return res.redirect("/campgrounds");
      }
      var ratingsArray = [];

      foundCampground.comments.forEach(function(rating) {
        ratingsArray.push(rating.rating);
      });
      if (ratingsArray.length === 0) {
        foundCampground.rateAvg = 0;
      } else {
        var ratings = ratingsArray.reduce(function(total, rating) {
          return total + rating;
        });
        foundCampground.rateAvg = ratings / foundCampground.comments.length;
      }

      // foundCampground.rateCount = foundCampground.comments.length;
      foundCampground.save();
      res.render("campgrounds/show", { campground: foundCampground });
    });
});

// EDIT CAMPGROUND ROUTE
router.get(
  "/:id/edit",
  middleware.isLoggedIn,
  middleware.checkCampgroundOwnership,
  function(req, res) {
    res.render("campgrounds/edit", { campground: req.campground });
  }
);

// UPDATE CAMPGROUND ROUTE
router.put(
  "/:id",
  upload.single("image"),
  middleware.checkCampgroundOwnership,
  function(req, res) {
    // find and update the correct campground
    Campground.findById(req.params.id, async function(err, campground) {
      if (err) {
        req.flash("error", err.message);
        res.redirect("back");
      } else {
        if (req.file) {
          try {
            await cloudinary.v2.uploader.destroy(campground.imageId);
            var result = await cloudinary.v2.uploader.upload(req.file.path, {
              width: 1500,
              height: 1000,
              gravity: "center",
              crop: "crop"
            });
            campground.imageId = result.public_id;
            campground.image = result.secure_url;
          } catch (err) {
            req.flash("error", err.message);
            return res.redirect("back");
          }
        }
        var address = {
          street: req.body.campground.street,
          city: req.body.campground.city,
          state: req.body.campground.state,
          zip: req.body.campground.zip
        };
        campground.address = address;
        var booking = {
          start: req.body.campground.start,
          end: req.body.campground.end
        };
        campground.booking = booking;
        campground.phone = req.body.campground.phone;
        campground.name = req.body.campground.name;
        campground.description = req.body.campground.description;
        campground.price = req.body.campground.price;
        var tagArray;
        tagArray = req.body.campground.tags.split(",");
        campground.tags = tagArray;
        campground.save();
        req.flash("success", "Successfully updated your campground!");
        res.redirect("/campgrounds/" + req.params.id);
      }
    });
  }
);

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findById(req.params.id, async function(err, campground) {
    if (err) {
      req.flash("error", err.message);
      return res.redirect("back");
    }
    try {
      await cloudinary.v2.uploader.destroy(campground.imageId);
      campground.remove();
      req.flash("success", "Campground deleted!");
      res.redirect("/campgrounds");
    } catch (err) {
      if (err) {
        req.flash("error", err.message);
        return res.redirect("back");
      }
    }
  });
});

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = router;
