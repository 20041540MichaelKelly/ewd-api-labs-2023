import accountService from "../services";

export default (dependencies) => {

    const createPerson = async (request, response, next) => {
        // Input
        const { firstName, lastName, email, password } = request.body;
        // Treatment
        const person = await personService.registerPerson(firstName, lastName, email, password, dependencies);
        //output
        response.status(201).json(person);
    };
    const getPerson= async (request, response, next) => {
        //input
        const personId = request.params.id;
        // Treatment
        const person = await personService.getPerson(personId, dependencies);
        //output
        response.status(200).json(person);
    };
    
    const listPeople = async (request, response, next) => {
        // Treatment
        const persons = await personService.find(dependencies);
        //output
        response.status(200).json(persons);
    };
    
    const addFavouritePerson = async (request, response, next) => {
        try {
            const { personId } = request.body;
            const id = request.params.id;
            const person = await personService.addFavourite(id, personId, dependencies);
            response.status(200).json(person);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const getFavouritePeople = async (request, response, next) => {
        try {
            const id = request.params.id;
            const favourites = await personService.getFavourites(id, dependencies);
            response.status(200).json(favourites);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        createPerson,
        getPerson,
        listPeople,
        // updatePerson,
        addFavouritePerson,
        getFavouritePeople,
       // removeFavourite,
        verify  //ADD THIS
    };

};
