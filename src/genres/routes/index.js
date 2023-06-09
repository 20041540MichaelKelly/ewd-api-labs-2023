import express from 'express';
import GenresController from '../controllers';

const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const genresController = GenresController(dependencies);
    router.route('/')
        .post(genresController.createGenre);

        router.route('/movie/list')
        .get(genresController.listGenres);

    router.route('/:id')
        .get(genresController.getGenre);

    return router;
};
export default createRouter;
