import accountService from "../services";

export default (dependencies) => {

    const createAccount = async (request, response, next) => {
        try {
            // Input
            const { firstName, lastName, email, password } = request.body;
            // Treatment
            const account = await accountService.registerAccount(firstName, lastName, email, password, dependencies);
            console.log("account created...");
            //output
            response.status(200).json(account);

        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));        }
    };
    const getAccount = async (request, response, next) => {
        //input
        const accountId = request.params.id;
        // Treatment
        const account = await accountService.getAccount(accountId, dependencies);
        //output
        response.status(200).json(account);
    };
    const getAccountForEmail = async (request, response, next) => {
        //input
        const email = request.params.email;
        // Treatment
        const account = await accountService.getAccountForEmail(email, dependencies);
        //output
        response.status(200).json(account);
    };
    const updateAccount = async (request, response, next) => {
        // Input
        const id = request.params.id;

        const { firstName, lastName, email, password } = request.body;
        // Treatment
        const account = await accountService.updateAccount(id, firstName, lastName, email, password, dependencies);
        //output
        response.status(201).json(account);
    };
    const listAccounts = async (request, response, next) => {
        // Treatment
        const accounts = await accountService.find(dependencies);
        //output
        response.status(200).json(accounts);
    };
    const authenticateAccount = async (request, response, next) => {
        try {
            console.log('Authenticating account...');
            const { email, password } = request.body;
            console.log(request.body);
            const token = await accountService.authenticate(email, password, dependencies);
            console.log('token generated...');
            const user = await accountService.getAccountForEmail(email, dependencies);
            console.log('User returned for email');
            response.status(200).json({ token: `BEARER ${token}`, userId: user.id });
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const addFavourite = async (request, response, next) => {
        try {
            const { movieId } = request.body;
            const id = request.params.id;
            const account = await accountService.addFavourite(id, movieId, dependencies);
            response.status(200).json(account);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const getFavourites = async (request, response, next) => {
        try {
            const id = request.params.id;
            const favourites = await accountService.getFavourites(id, dependencies);
            response.status(200).json(favourites);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const addFavouritePerson = async (request, response, next) => {
        try {
            const { personId } = request.body;
            console.log(personId);
            const id = request.params.id;
            const account = await accountService.addFavouritePerson(id, personId, dependencies);
            response.status(200).json(account);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const getFavouritePerson = async (request, response, next) => {
        try {
            const id = request.params.id;
            const favourites = await accountService.getFavouritePerson(id, dependencies);
            response.status(200).json(favourites);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const addFavouriteTvShow = async (request, response, next) => {
        try {
            const { tvShowId } = request.body;
            console.log(tvShowId);
            const id = request.params.id;
            const account = await accountService.addFavouriteTvShow(id, tvShowId, dependencies);
            response.status(200).json(account);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const getFavouriteTvShow = async (request, response, next) => {
        try {
            const id = request.params.id;
            const favourites = await accountService.getFavouriteTvShow(id, dependencies);
            response.status(200).json(favourites);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    //... code as before
    const verify = async (request, response, next) => {
        try {
            // Input
            const authHeader = request.headers.authorization;

            // Treatment

            const accessToken = authHeader.split(" ")[1];
            const user = await accountService.verifyToken(accessToken, dependencies);

            //output
            next();
        } catch (err) {
            //Token Verification Failed
            next(new Error(`Verification Failed ${err.message}`));
        }
    };

    return {
        createAccount,
        getAccount,
        getAccountForEmail,
        listAccounts,
        updateAccount,
        authenticateAccount,
        addFavourite,
        getFavourites,
        addFavouritePerson,
        getFavouritePerson,
        addFavouriteTvShow,
        getFavouriteTvShow,
        // removeFavourite,
        verify  //ADD THIS
    };

};
