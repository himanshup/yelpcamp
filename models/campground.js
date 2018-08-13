var mongoose = require("mongoose");

// SCHEME SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  imageId: String,
  description: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  phone: String,
  booking: {
    start: String,
    end: String
  },
  tags: [],
  createdAt: { type: Date, default: Date.now },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  rateAvg: Number,
  rateCount: Number
});

module.exports = mongoose.model("Campground", campgroundSchema);
