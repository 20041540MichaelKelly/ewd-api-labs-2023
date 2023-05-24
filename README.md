# Assignment 2 - Web API.
__Name:__ [Michael Kelly 20041540]

# Features.
+ Get Similar Movies: Get a list of similar movies using a movie ID.
+ Get Upcoming Movies: Get a list of upcoming movies.
+ Get Now Playing Movies: Get a list of movies now playing.
+ Post a Favourite Movie: Post a movieId into a list called favourites.
+ Get TV shows: Ge a list of TV shows.
+ Post a favourite TV show: Post a tvShowId into a list called favouriteTvShows.
+ Get a list of Actors: Get a list of actors that the user can view.
+ Add a Actor as a Favourite: Add an actor as a favourite person.
+ Changed over API calls: Changed all the api calls from tmdb-api to movie-api. The app still functions as it would with the tmdb api 

# Installation Requirements
This project was coded within a Dev/container. I had created a codespace also following the labs but the limit of 60hrs was not appealing so opted for the free option of using Docker Desktop and using a mongodb connection.

Working through the project, I decided on using Heroku to host the API and using MongoDB Atlas for the database. Originally these two environments were functioning together within a Dev Container.
To set up with Atlas: 
I signed up for an account.
I created a shared M0 cluster as this is free.
Then I entered my credientials.
I used a auto generated password for security reasons.
Then I installed robo 3T to test the connection and ensure the database was configured correctly.
Once I established a connection, I then connected the API to the that data base using the SRV string for example “mongodb+srv://<UserName>:<Password>@ms-ewd-api.tnghu00.mongodb.net/?retryWrites=true&w=majority”
Enter YOUR Username and Password instead of the place holders and remove <>.

I utilised ChatGPT to create the regex patterns that was required. This was very convenient and I believe this “AI” will be a great accessory to any developer’s arsenal. Regex patterns are confusing and are static. This saves the developer time rather than combing through the web for the correct pattern.  

examples: 
```
const pattern = /^[A-Za-z]{1,30}$/;
```

React-Front-End Repo: git clone https://github.com/20041540MichaelKelly/Msc-Front-End-Movies.git.git
Node-API Repo: git clone https://github.com/20041540MichaelKelly/ewd-api-labs-2023.git

The link to youtube video: https://youtu.be/RZWbcnkonA8

npm install 

Front-end : npm run dev
api-back-end: npm start

If you would like to restart the API: rs in the terminal and hit enter.

# API Configuration

NODE_ENV=development
PORT=8080
HOST=localhost
DATABASE_DIALECT=mongo
DATABASE_URL=YOUR_MONGO_DATABASE_URL
JWT_SECRET_KEY=YOUR_JWT_SECRET_KEY
TMDB_KEY=YOUR_TMDB_API_KEY

# API
Colons can be used to align columns.

|                                | GET                                                       | POST          | PUT                   | DELETE   |
| -----------------------------  |---------------------------------------------------------- | ------------- |:-------------:        | -------- |
| api/movies                     | Gets a list of movies	                                   |/              | /                     | /        |
| api/movies                     | /                                                         | create a movie|   /                   | /        |
| api/movies/{id}                | get a movie for id                                        |    /          |      /                |  /       |
| api/movies/fantasy             | Gets a list of movies	                                   |/              | /                     | /        |
| api/movies/playing             | Gets a list of movies	now playing                        |/              | /                     | /        |
| api/movies/upcoming            | Gets a list of upcoming movies	                           |/              | /                     | /        |
| api/movies/{id}/similar        | Gets a list of similar movies to the movie id passed in	 |/              | /                     | /        |
| api/tv                         | Gets a list of tv shows	                                 |/              | /                     | /        |
| api/tv/{id}/similar            | Gets a list of tv shows to the tv show id passed in	     |/              | /                     | /        |
| api/tv/favourites              | Gets a list of favourite tv shows                         |/              | /                     | /        |
| api/tv/popular                 | Gets a list of popular tv shows                           |/              | /                     | /        |
| api/person/{id}                | Gets a list of people	                                   |/              | /                     | /        |
| api/person/favourites          | Gets a list of favourite people	                         |/              | /                     | /        |
| api/accounts/{id}              | Gets a account for id passed in	                         |/              | /                     | /        |
| api/accounts/                  |/                                                          |/              | Create a user account | /        |
| api/accounts/security/token    | /	                                                       |/              | creates a token for the newly created account           | /       |

# Security and Authentication
[Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB]

[Give details of the routes that have authentication. ]

# Validation
[Briefly describe and extra data validation you added to the API, and where it is implemented in the App.]
```
title: Joi.string().min(1),
time: Joi.string().regex(/^\d{1,3}$/).required(),
genres: Joi.string().regex(/^[A-Za-z]{1,15}$/).required(),
date: Joi.string().lowercase().required(),
productionCompany: Joi.string().regex(pattern).required(),
overView: Joi.string().regex(regex).required(),
```

Explanation:
  + title must have a minimum of 1 character entered
  + time must be in number format and be 1 minimum and 3 maximum characters
  + genres must be have 1 minimum and a maximum of 15 letters, genres don't have special characters bacuse there is ('Horror, 'Comedy', 'Action'..etc)
  + date is easier to contain as a string, just format to lowercase
  + productionCompany 
# Testing
Briefly state how you tested the API.

An example of how I tested for a new feature called Fantasy Movie:
I created the necessary file structure containing the controllers, entities, repository and services and validators.
Joi was used as the validation method for the project. Regex was applied to each field in the format that was required and that made sense for e.g. movie genres has no special characters in the list or numbers. This means we need not to cater to them.
Postman was used thoroughly throughout the API creation process. In actual fact when the project was just been created first. Postman was all that was used and 70% of the project was built by Test Driven Development. Then when API, database and assignment 1 were connected the React app worked excellent.
Fantasy Movie was a feature created to allow the user to create their own “Fantasy Movie” of what they would like to see be created. 
There was extensive console logging as shown in the screenshot; This is needed for the user to be aware at what stage the API is at for processing the data.
The regex is explained in the validation section so it was my job in this step to create a fantasy movie while abiding by the validation rules that was set in the fantasyMovieSchema.


Give an example of any automated testing results or link to a report.



# Integrating with React App
[Describe how you integrated your React app with the API. You can provide a link to the React App repo and give an example of an API call from React App. For example: ]
The first step was to clone the assignment from Movie Labs assignment 1. Then the code that was calling the tmdb-api API was altered to use the new movie-api API that was created for thee assignment. 
The process involved altering the original calls directly to the tmdb API to routing to the movie-api. While doing this we can perform validation on values been sent through. Here is an example of the adapted code with explanation:

export const getSimilarMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/similar`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

This is an example of getting similar movies to the movie that the user is currently viewing. It takes in an argument (args) and extracts the id, which in turn passes the id as a parameter in the url to the API. The API then does all the heavy lifting. This API call also checks to ensure that the user has a token associated with them from a successful login. Then we take our response returned from the A
[You can also add images of React app here also if you wish. This can be also shown in the video]

# Extra features

The database has been deployed to `MongoDb Atlas`
The API has been deployed to heroku `https://powerful-reef-03411.herokuapp.com/`
The front end that has been altered to adapt assignment 2 is hosted here `https://msc-front-end-movies-bp3d0mk5f-20041540michaelkelly.vercel.app/`
I utilised `Robo3T` to ensure the connection got configured correctly to the remote location `atlas`
`ChatGPT`is exceptional for creating regex to fulfil the requirements of the developer. That is what I used this "AI" for.
__Fantasy Movies__ The ability to create a fantasy movie that is validated and stored in the mongodb. The ability to also retrieve this movie by id. __Fantasy Movies__ was created with the structure:
+ Controller
+ entities
+ repositories
+ services
+ validators
+ routes

There is a lot of logging if you view the API's console. As and ex Technical Support Engineer, I value every log that is stratigically placed. Throughout the project console.log() messages are inserted to make the debugging process a lot more easier. In return you save time to use on more fun stuff as adding a new feature.

# Independent learning.
I researched MongoDB Atlas to host the database and had never used robo3T to monitor database activity. 
ChatGPT is something new that I had a look at for regex, I think this will be a revoloutionary tool for a developer. 
I researched into heroku to deploy the API and Vercel to deploy the front end react application. 
I enjoy writing DRY efficent code and had a good look into this in terms of the programming language Node JS.
Docker is an application that I would have used in my previous job, I still needed to be refreshed on it's usage in this assignment.
I found the testing aspect of the project to be very Intriguing. I have always been fascinated at the amount of third party applications that are available to developers for testing. I would find creating an a pplication like Postman to be very appealing. 
The testing phase was the best learning phase. I had created 70% of the API calls through this process.
  
  [api_call]: ./images/api_calls.png
[chatgpt]: ./images/chatgpt_regex.png
[logging]: ./images/console_logging.png
[error_email]: ./images/error_email_already_exists.png
[playlist_favourite_icon_movie]: ./screenshots/playlist_favourite_icon_movie.png
[error_email_exists_signup]: ./screenshots/error_email_exists_signup.png
[success_signup]: ./screenshots/success_signup_alert.png
[home_page_search]: ./screenshots/home_page_search.png
[home_page]: ./screenshots/home_page1.png
[home_page_movie_card]: ./screenshots/movie_cards_home_page.png
[home_page_nav]: ./screenshots/home_page_nav.png
[upcoming_movies]: ./screenshots/upcoming_movies1.png
[hover_example]: ./screenshots/hover_example.png
[review1]: ./screenshots/review1.png
[review2]: ./screenshots/review2.png
[create_a_fantasy_movie]: ./screenshots/create_a_fantasy_movie.png
[fantasy_list]: ./screenshots/fantasy_list.png
[fantasy_movie_details]: ./screenshots/fantasy_movie_details.png
[movie_card1]: ./screenshots/movie_card1.png
[actor_details]: ./screenshots/actors_details.png
[similar_movies]: ./screenshots/similar_movies.png
[actor_different_movie]: ./screenshots/actor_different_movie.png
[tv_shows]: ./screenshots/tv_shows.png
[tv_shows_fave_play]: ./screenshots/tv_shows_fave_play.png
[tv_show_play_list]: ./screenshots/tv_show_playlist.png
[tv_show_favourites]: ./screenshots/tv_show_favourotes.png
[tv_similar]: ./screenshots/tv_similar.png
