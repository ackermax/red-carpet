# Red-Carpet :clapper: :movie_camera:

## Table of Contents

- [Red-Carpet](#red-carpet-clapper-moviecamera)
	- [Concept](#concept)
	- [Deployment](#deployment)
	- [Screenshots of this Project](#screenshots-of-this-project)
	- [API's](#apis)
	- [Database Structure](#database-structure)
	- [Technologies](#technologies)
	- [Authors](#authors)

## Concept

>Create and manage your own personal list of award winning (and nominated films), with reviews, a watched list, and priority lists based on which awards shows are coming up next. Red Carpet is the perfect tool for your elitist movie-watching needs!

## Deployment

This app has been deployed to Heroku and can be used by following the link below:

[Red Carpet](https://red-carpet-app.herokuapp.com/ "Red Carpet - https://red-carpet-app.herokuapp.com")

## Screenshots of this Project

![Red Carpet Splash Page](https://raw.github.com/ackermax/red-carpet/master/screenshots/screenshot1.gif "Red Carpet Splash Page")

![Red Carpet Search Page](https://raw.github.com/ackermax/red-carpet/master/screenshots/screenshot2.png "Red Carpet Search Page")

![Red Carpet Queue Page](https://raw.github.com/ackermax/red-carpet/master/screenshots/screenshot3.png "Red Carpet Queue Page")

## API's

* TMDB.org
* Amazon

## Database Structure

```
* Tables
	* Users
		* Columns
			* User_ID
			* FName
			* LName
			* Username/Email

	* UserData
			* Columns
			* User_ID
			* Movie_ID
			 * Rating
			 * Watched
			* Poster HREF
	* MovieData
		* Columns
			* Movie_ID
			* Year
			* Category
			* Nominee/Movie
			* AddInfo
			* Won
```

## Technologies

* Body-Parser - https://www.npmjs.com/package/body-parser
* Express - https://www.npmjs.com/package/express
* Express-Handlebars - https://www.npmjs.com/package/express-handlebars
* Materialize - http://materializecss.com/
* MySQL2 - https://www.npmjs.com/package/mysql2
* Path - https://www.npmjs.com/package/path
* Sequelize - https://www.npmjs.com/package/sequelize
* Sequelize-CLI - https://www.npmjs.com/package/sequelize-cli
* dotenv - https://www.npmjs.com/package/dotenv
* handlebars-helpers - https://www.npmjs.com/package/handlebars-helpers
* passport - https://www.npmjs.com/package/passport

## Authors

> **Team PAWA**
+ Mark **P**owalisz https://github.com/FenixRising13
+ Max **A**ckerman https://github.com/ackermax
+ Steve **W**alker https://github.com/captnwalker
+ Jason **A**pfel https://github.com/jasapper
  - *Team Lead: Max*

![Filmocat](https://octodex.github.com/images/filmtocat.png)