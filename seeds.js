var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var faker = require("faker");
var _ = require("lodash");

// var photos = [
//   "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-0.3.5&s=14948b1b6a8dd54164a0db522662e869&auto=format&fit=crop&w=1500&q=80",
//   "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cedc6b95f731395da7269d2341f9a5e&auto=format&fit=crop&w=1500&q=80, https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b084690f83c5e63fafd161f8bc729a1f&auto=format&fit=crop&w=1500&q=80",
//   "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b084690f83c5e63fafd161f8bc729a1f&auto=format&fit=crop&w=1500&q=80",
//   "https://images.unsplash.com/photo-1496545672447-f699b503d270?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba3fa37b995a705a01d022cada13f726&auto=format&fit=crop&w=1502&q=80",
//   "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-0.3.5&s=2e80ca86a30db7be648da0d9b9e21fae&auto=format&fit=crop&w=1500&q=80",
//   "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1c8cc988efddbda8746281871c0c8bf&auto=format&fit=crop&w=1559&q=80",
//   "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=1502&q=80",
//   "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1500&q=80",
//   "https://images.unsplash.com/photo-1520732713659-8f14034ba7d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a330e0a93ad58039a3d719ee837c6a4&auto=format&fit=crop&w=1500&q=80",
//   "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1500&q=80"
// ];

// var seeds = [];

// for (var i = 0; i < 20; i++) {
//   seeds.push({
//     name: faker.company.companyName(),
//     price: faker.commerce.price(),
//     image: photos[Math.floor(Math.random() * photos.length)],
//     description: faker.lorem.paragraph(),
//     address: {
//       street: faker.address.streetAddress(),
//       city: faker.address.city(),
//       state: faker.address.stateAbbr(),
//       zip: faker.address.zipCode()
//     },
//     phone: faker.phone.phoneNumberFormat(),
//     booking: {
//       start: faker.date.month(),
//       end: faker.date.month()
//     },
//     tags: _.sampleSize(
//       ["wifi", "boating", "skiing", "snowboarding", "fishing", "tv"],
//       3
//     ),
//     author: {
//       username: faker.internet.userName()
//     }
//   });
// }

function seedDB() {
  // Remove all campgrounds
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed all campgrounds");
  });

  // add a few campgrounds
  // seeds.forEach(function(seed) {
  //   Campground.create(seed, function(err, campground) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("added a campground");
  //       // create a comment on each campground
  //       Comment.create(
  //         {
  //           text: faker.lorem.sentence(),
  //           author: {
  //             username: faker.internet.userName()
  //           }
  //         },
  //         function(err, comment) {
  //           if (err) {
  //             console.log(err);
  //           } else {
  //             campground.comments.push(comment);
  //             campground.save();
  //             console.log("created new comments");
  //           }
  //         }
  //       );
  //     }
  //   });
  // });
}

module.exports = seedDB;
