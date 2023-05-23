export default (dependencies) => {

    const { fantasyMovieSchema } = dependencies;

    const validateFantasyMovie = async (request, response, next) => {
        // Input
        try {
            console.log('Validating entry fields for fantasy Movie...');
            const validated = await fantasyMovieSchema['fantasyMovie'].validateAsync(request.body);
            request.body = validated;
            console.log('Validation complete');

            next();
        } catch (err) {
            console.log(`validation returned error: ${err}`);
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validateFantasyMovie
    };
};
