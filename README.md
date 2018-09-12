![Image 1](https://raw.githubusercontent.com/himanshup/yelp-camp/master/screenshots/image1.png)  
![Image 2](https://raw.githubusercontent.com/himanshup/yelp-camp/master/screenshots/image2.png)  

YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.  

This website was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.  

View it here https://yelp-camp2018.herokuapp.com/

## Features
* Users can create, edit, and remove campgrounds
* Users can review campgrounds once, and edit or remove their review
* User profiles include more information on the user (full name, email, phone, join date), their campgrounds, and the option to edit their profile or delete their account
* Search campground by name or location
* Sort campgrounds by highest rating, most reviewed, lowest price, or highest price

## Installation
**Note**: You need to install MongoDB and edit where it says DATABASEURL (in app.js) with yours.  
```
git clone https://github.com/himanshup/yelp-camp.git
cd yelp-camp
npm install
node app.js
```
