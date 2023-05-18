export default (dependencies) => {

    const { genresSchema } = dependencies;

    const validateGenre = async (request, response, next) => {
        // Input
        try {
            const validated = await genresSchema['genres'].validateAsync(request.body);
            request.body = validated;
            next();
        } catch (err) {

            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validateGenre
    };
};
