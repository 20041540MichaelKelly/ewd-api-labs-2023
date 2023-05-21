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
[Describe how to run the API. If you used a DevContainer/Codespace , you can refer to the relevant files in your repo.]
A DevConatiner is used to for this assignment. Docker is the dev container of choice. Docker is running a Mongo db parralel with the api.

React-Front-End Repo: git clone https://github.com/20041540MichaelKelly/Msc-Front-End-Movies.git.git
Node-API Repo: git clone https://github.com/20041540MichaelKelly/ewd-api-labs-2023.git

npm install 

Front-end : npm run dev
api-back-end: npm start

# API Configuration

NODE_ENV=development
PORT=8080
HOST=localhost
DATABASE_DIALECT=mongo
DATABASE_URL=YOUR_MONGO_DATABASE_URL
JWT_SECRET_KEY=YOUR_JWT_SECRET_KEY
TMDB_KEY=YOUR_TMDB_API_KEY