import express from 'express';
import TvShowController from '../controllers';

const createTvShowRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const tvShowController = TvShowController(dependencies);

    //   router.route('/*')
    //     .all(accountsController.verify); //ADD THIS: require token for all routes

    router.route('/:id')
        .get(tvShowController.getTvShow);

    router.route('/')
        .get(tvShowController.listTvShows); 

    router.route('/:id/credits')
        .get(tvShowController.getTvShowCredits);  
        
    router.route('/:id/images')
        .get(tvShowController.getTvShowImages);    

    router.route('/:id/aggregate_credits')
        .get(tvShowController.getTvShowAggregateCredits);
    
    router.route('/:id/similar')
        .get(tvShowController.getSimilarTvShows);      

    return router;
};
export default createTvShowRouter;
