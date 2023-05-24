import fantasyMovieService from "../services";

export default (dependencies) => {

    const createFantasyMovie = async (request, response, next) => {
        try {
            // Input
            console.log('Creating Fantasy movie...');
            const { title, time, genres, productionCompany,overView } = request.body;
            console.log(request.body);
            // Treatment
            const fantasyMovie = await fantasyMovieService.registerFantasyMovie(title, time, genres, productionCompany,overView, dependencies);
            console.log("fantasy movie created!");
            //output
            response.status(201).json(fantasyMovie);

        } catch (err) {
            response.status(400).json(`Invalid Data ${err.message}`);
        }
    };

    const getFantasyMovie = async (request, response, next) => {
        //input
        const fMovieId = request.params.id;
        // Treatment
        const fMovie = await fantasyMovieService.getFanatasyMovie(fMovieId, dependencies);
        //output
        response.status(200).json(fMovie);
    };
    
    const listFantasyMovies = async (request, response, next) => {
        // Treatment
        const movies = await fantasyMovieService.find(dependencies);
        //output
        response.status(200).json(accounts);
    };
    
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
        createFantasyMovie,
        listFantasyMovies,
        getFantasyMovie,
        // removeFavourite,
        verify  //ADD THIS
    };

};
