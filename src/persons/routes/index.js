import express from 'express';
import PersonsController from '../controllers';

const createPersonsRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const personsController = PersonsController(dependencies);

    router.route('/:id')
        .get(personsController.getPerson);

    // router.route('/:id')
    //     .get(personsController.getPersons);    

    router.route('/popular')
        .get(personsController.listPeople);     

    router.route('/:id/movie_credits')
        .get(personsController.getActorCredits);

    return router;
};
export default createPersonsRouter;
