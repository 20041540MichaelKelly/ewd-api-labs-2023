import express from 'express';
import FantasyMoviesController from '../controllers';
import ValidationController from '../controllers/ValidationController'; //add to import statements at top of file


const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const fantasyMovieController = FantasyMoviesController(dependencies);
    const validationController = ValidationController(dependencies);//Add this lineLoad validation controller with dependencies

    router.route('/')
        .post(validationController.validateFantasyMovie, fantasyMovieController.createFantasyMovie); //add validateAccount to route 

    router.route('/')
        .get(fantasyMovieController.listFantasyMovies);

    router.route('/:id')
        .get(fantasyMovieController.getFantasyMovie);


    return router;
};
export default createRouter;
