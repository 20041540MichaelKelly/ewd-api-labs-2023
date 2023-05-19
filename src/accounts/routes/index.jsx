import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../controllers/ValidationController'; //add to import statements at top of file


const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);
    router.route('/')
        .post(accountsController.createAccount);

    router.route('/')
        .get(accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.getAccount);

    router.route('/:id')
        .post(accountsController.updateAccount);

    router.route('/security/token')
        .post(accountsController.authenticateAccount);

        router.route('/:id/favourites')
        .post(accountsController.addFavourite);
        
    router.route('/:id/favourites')
        .get(accountsController.getFavourites);

        router.route('/:id/favouritePeople')
        .post(accountsController.addFavouritePerson);
        
    router.route('/:id/favouritePeople')
        .get(accountsController.getFavouritePerson);

    const validationController = ValidationController(dependencies);//Add this lineLoad validation controller with dependencies

    router.route('/')
        .post(validationController.validateAccount, accountsController.createAccount); //add validateAccount to route

    return router;
};
export default createRouter;
