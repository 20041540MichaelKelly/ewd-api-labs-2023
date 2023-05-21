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


dotenv.config();
db.init();

const app = express();

const port = process.env.PORT;


const dependencies = buildDependencies();

app.use(express.json());

app.use('/api/movies', createMoviesRouter(dependencies));

app.use('/api/movies/upcoming', createMoviesRouter(dependencies));

app.use('/api/accounts', createAccountsRouter(dependencies));

app.use('/api/genre', createGenresRouter(dependencies));

app.use('/api/person', createPersonsRouter(dependencies));

app.use('/api/tv', createTvShowRouter(dependencies));




app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

