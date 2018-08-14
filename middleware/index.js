var Campground = require("../models/campground");
var Comment = require("../models/comment");
var User = require("../models/user");
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
  Campground.findById(req.params.id, function(err, foundCampground) {
    if (err || !foundCampground) {
      req.flash("error", "Sorry, that campground does not exist!");
      res.redirect("/campgrounds");
    } else if (
      foundCampground.author.id.equals(req.user._id) ||
      req.user.isAdmin
    ) {
      req.campground = foundCampground;
      next();
    } else {
      req.flash("error", "You don't have permission to do that!");
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
  Comment.findById(req.params.comment_id, function(err, foundComment) {
    if (err || !foundComment) {
      req.flash("error", "Sorry, that comment does not exist!");
      res.redirect("/campgrounds");
    } else if (
      foundComment.author.id.equals(req.user._id) ||
      req.user.isAdmin
    ) {
      req.comment = foundComment;
      next();
    } else {
      req.flash("error", "You don't have permission to do that!");
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
};

middlewareObj.checkProfileOwnership = function(req, res, next) {
  User.findById(req.params.user_id, function(err, foundUser) {
    if (err || !foundUser) {
      req.flash("error", "Sorry, that user doesn't exist");
      res.redirect("/campgrounds");
    } else if (foundUser._id.equals(req.user._id) || req.user.isAdmin) {
      req.user = foundUser;
      next();
    } else {
      req.flash("error", "You don't have permission to do that!");
      res.redirect("/campgrounds/" + req.params.user_id);
    }
  });
};

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You need to be logged in to do that!");
  res.redirect("/login");
};

module.exports = middlewareObj;
