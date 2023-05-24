import db from './src/config/db';
import dotenv from 'dotenv';
import express from 'express';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from "./src/config/dependencies";
import createMoviesRouter from './src/movies/routes';
import errorHandler from './src/utils/ErrorHandler';
import createGenresRouter from './src/genres/routes';
import createPersonsRouter from './src/persons/routes';
import createTvShowRouter from './src/tv/routes';
import createFantasyMovieRouter from './src/fantasyMovies/routes';



dotenv.config();
db.init();

const app = express();

const port = process.env.PORT;
// const session = require('express-session');

// app.use(session({
//   secret: 'secretsofthecoolnerds',  // a secret string used to sign the session ID cookie
//   resave: false,  // don't save session if unmodified
//   saveUninitialized: false  // don't create session until something stored
// }));


const dependencies = buildDependencies();

app.use(express.json());

app.use('/api/movies', createMoviesRouter(dependencies));

app.use('/api/movies/upcoming', createMoviesRouter(dependencies));

app.use('/api/accounts', createAccountsRouter(dependencies));

app.use('/api/genre', createGenresRouter(dependencies));

app.use('/api/person', createPersonsRouter(dependencies));

app.use('/api/tv', createTvShowRouter(dependencies));

app.use('/api/fantasy', createFantasyMovieRouter(dependencies));

app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

