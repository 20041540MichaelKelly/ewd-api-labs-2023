import express from 'express';
import MoviesController from '../controllers';

//import AccountsController from '../../accounts/controllers';


const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    //const accountsController = AccountsController(dependencies);


    //   router.route('/*')
    //     .all(accountsController.verify); //ADD THIS: require token for all routes

    router.route('/:id')
        .get(moviesController.getMovie);

    router.route('/')
        .get(moviesController.find); 

    router.route('/:id/images')
        .get(moviesController.getMovieImages);


/**
 *************** Reviews
 */
    router.route('/:id/reviews')
        .get(moviesController.getMovieReviews);

        router.route('/:id/reviews')
        .get(moviesController.postMovieReviews);    

    router.route('/upcoming')
        .get(moviesController.getUpcomingMovies);  
/**
 * ****************** */ 
        
    router.route('/:id/credits')
        .get(moviesController.getMovieCredits);

    router.route('/popular')
        .get(moviesController.getPopularMovies); 

    router.route('/now_playing')
        .get(moviesController.getMoviesNowPlaying);

    router.route('/:id/similar')
        .get(moviesController.getSimilarMovies);     

    return router;
};
export default createMoviesRouter;
