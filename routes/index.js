var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Campground = require("../models/campground");
var Comment = require("../models/comment");
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
var upload = multer({
  storage: storage,
  fileFilter: imageFilter
});

var cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dmrien29n",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// root route
router.get("/", function(req, res) {
  if (req.user) {
    return res.redirect("/campgrounds");
  } else {
    res.render("landing");
  }
});

router.get("/about", function(req, res) {
  res.render("about");
});

// show register form
router.get("/register", function(req, res) {
  if (req.user) {
    return res.redirect("/campgrounds");
  } else {
    res.render("register");
  }
});

// handle sign up logic
router.post("/register", upload.single("image"), function(req, res) {
  if (req.file === undefined) {
    var newUser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      fullName: req.body.fullName,
      image: "",
      imageId: ""
    });
    User.register(newUser, req.body.password, function(err, user) {
      if (err) {
        return res.render("register", {
          error: err.message
        });
      }
      passport.authenticate("local")(req, res, function() {
        res.redirect("/campgrounds");
      });
    });
  } else {
    cloudinary.v2.uploader.upload(
      req.file.path, {
        width: 400,
        height: 400,
        gravity: "center",
        crop: "scale"
      },
      function(err, result) {
        if (err) {
          req.flash("error", err.messsage);
          return res.redirect("back");
        }
        req.body.image = result.secure_url;
        req.body.imageId = result.public_id;
        var newUser = new User({
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          fullName: req.body.fullName,
          image: req.body.image,
          imageId: req.body.imageId
        });
        User.register(newUser, req.body.password, function(err, user) {
          if (err) {
            return res.render("register", {
              error: err.message
            });
          }
          passport.authenticate("local")(req, res, function() {
            res.redirect("/campgrounds");
          });
        });
      }, {
        moderation: "webpurify"
      }
    );
  }
});

// show login form
router.get("/login", function(req, res) {
  if (req.user) {
    return res.redirect("/campgrounds");
  } else {
    res.render("login");
  }
});

// handle login logic
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login",
    failureFlash: true
  }),
  function(req, res) {}
);

// logout route
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// user profile
router.get("/users/:user_id", function(req, res) {
  User.findById(req.params.user_id, function(err, foundUser) {
    if (err || !foundUser) {
      req.flash("error", "This user doesn't exist");
      return res.render("error");
    }
    Campground.find()
      .where("author.id")
      .equals(foundUser._id)
      .exec(function(err, campgrounds) {
        if (err) {
          req.flash("error", "Something went wrong");
          res.render("error");
        }
        Comment.find()
          .where("author.id")
          .equals(foundUser._id)
          .exec(function(err, ratedCount) {
            if (err) {
              req.flash("error", "Something went wrong");
              res.render("error");
            }
            res.render("users/show", {
              user: foundUser,
              campgrounds: campgrounds,
              reviews: ratedCount
            });
          });
      });
  });
});

// edit profile
router.get(
  "/users/:user_id/edit",
  middleware.isLoggedIn,
  middleware.checkProfileOwnership,
  function(req, res) {
    res.render("users/edit", {
      user: req.user
    });
  }
);

// update profile
router.put(
  "/users/:user_id",
  upload.single("image"),
  middleware.checkProfileOwnership,
  function(req, res) {
    User.findById(req.params.user_id, async function(err, user) {
      if (err) {
        req.flash("error", err.message);
      } else {
        if (req.file) {
          try {
            await cloudinary.v2.uploader.destroy(user.imageId);
            var result = await cloudinary.v2.uploader.upload(req.file.path, {
              width: 400,
              height: 400,
              gravity: "center",
              crop: "scale"
            }, {
              moderation: "webpurify"
            });
            user.imageId = result.public_id;
            user.image = result.secure_url;
          } catch (err) {
            req.flash("error", err.message);
            return res.redirect("back");
          }
        }
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.fullName = req.body.fullName;
        user.save();
        req.flash("success", "Updated your profile!");
        res.redirect("/users/" + req.params.user_id);
      }
    });
  }
);

// delete user
router.delete("/users/:user_id", middleware.checkProfileOwnership, function(
  req,
  res
) {
  User.findById(req.params.user_id, async function(err, user) {
    if (err) {
      req.flash("error", err.message);
      return res.redirect("back");
    }
    if (user.image === "") {
      user.remove();
      res.redirect("/");
    } else {
      try {
        await cloudinary.v2.uploader.destroy(user.imageId);
        user.remove();
        res.redirect("/");
      } catch (err) {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("back");
        }
      }
    }
  });
});

module.exports = router;
