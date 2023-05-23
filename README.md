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

|               | GET           | POST          | PUT           | DELETE  |
| --------------|---------------| ------------- |:-------------:| --------|
|               |               |col 3 is       | right-aligned | $1600 |
| col 2 is      | centered      |   $12         |               |       |
| zebra stripes | are neat      |    $1         |               |       |

# Security and Authentication
[Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB]

[Give details of the routes that have authentication. ]

# Validation
[Briefly describe and extra data validation you added to the API, and where it is implemented in the App.]

# Testing
Briefly state how you tested the API.

Give an example of any automated testing results or link to a report.



# Integrating with React App
[Describe how you integrated your React app with the API. You can provide a link to the React App repo and give an example of an API call from React App. For example: ]

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then((res) => res.json());
};
[You can also add images of React app here also if you wish. This can be also shown in the video]

# Extra features
. . Briefly explain any non-standard features, functional or non-functional, developed for the app.

If you deployed to a hosting service/cloud, you should specify here.

# Independent learning.
. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .