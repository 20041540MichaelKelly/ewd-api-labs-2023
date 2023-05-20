import personService from "../services";

export default (dependencies) => {

    const getPerson= async (request, response, next) => {
        //input
        const personId = request.params.id;
        // Treatment
        const person = await personService.getPerson(personId, dependencies);
        //output
        response.status(200).json(person);
    };
    const getPersons= async (request, response, next) => {
        //input
        const page = request.params.page;
        // Treatment
        const person = await personService.getPerson(page, dependencies);
        //output
        response.status(200).json(person);
    };

    const getActorCredits= async (request, response, next) => {
        //input
        const personId = request.params.id;
        // Treatment
        const person = await personService.getActorCredits(personId, dependencies);
        //output
        response.status(200).json(person);
    };
    
    const listPeople = async (request, response, next) => {
        // Treatment
        const persons = await personService.listPeople(dependencies);
        //output
        response.status(200).json(persons);
    };
    
    
    return {
        getPerson,
        getPersons,
        listPeople,
        getActorCredits
        // updatePerson,
       // removeFavourite,
        //verify  //ADD THIS
    };

};
