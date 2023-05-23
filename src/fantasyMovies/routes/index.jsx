import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../controllers/ValidationController'; //add to import statements at top of file


const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);
    const validationController = ValidationController(dependencies);//Add this lineLoad validation controller with dependencies

    router.route('/')
        .post(validationController.validateAccount, accountsController.createAccount); //add validateAccount to route 

    router.route('/')
        .get(accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.getAccount);

    
    router.route('/:email')
        .get(accountsController.getAccountForEmail);    

    router.route('/:id')
        .post(accountsController.updateAccount);

    router.route('/security/token')
        .post(accountsController.authenticateAccount);

    router.route('/:id/favourite')
        .post(accountsController.addFavourite);
        
    router.route('/:id/favourite')
        .get(accountsController.getFavourites);

    router.route('/:id/favouritePerson')
        .post(accountsController.addFavouritePerson);
        
    router.route('/:id/favouritePerson')
        .get(accountsController.getFavouritePerson);

    router.route('/:id/favouriteTvShow')
        .post(accountsController.addFavouriteTvShow);
        
    router.route('/:id/favouriteTvShow')
        .get(accountsController.getFavouriteTvShow);

    return router;
};
export default createRouter;
