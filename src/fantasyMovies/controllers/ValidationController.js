export default (dependencies) => {

    const { accountSchema } = dependencies;

    const validateAccount = async (request, response, next) => {
        // Input
        try {
            console.log('Validating account...');
            const validated = await accountSchema['account'].validateAsync(request.body);
            request.body = validated;
            console.log('Validation complete');

            next();
        } catch (err) {
            console.log(`validation returned error: ${err}`);
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validateAccount
    };
};
