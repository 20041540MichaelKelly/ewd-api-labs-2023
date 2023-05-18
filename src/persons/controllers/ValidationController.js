export default (dependencies) => {

    const { personSchema } = dependencies;

    const validatePerson = async (request, response, next) => {
        // Input
        try {
            const validated = await personSchema['person'].validateAsync(request.body);
            request.body = validated;
            next();
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validatePerson
    };
};
