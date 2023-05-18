import express from 'express';
import MoviesController from '../controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);

    //   router.route('/*')
    //     .all(accountsController.verify); //ADD THIS: require token for all routes

    router.route('/:id')
        .get(moviesController.getMovie);

    router.route('/')
        .get(moviesController.find); 

    // router.route('/:id/reviews')
    //     .get(moviesController.getMovieReviews);

    return router;
};
export default createMoviesRouter;
