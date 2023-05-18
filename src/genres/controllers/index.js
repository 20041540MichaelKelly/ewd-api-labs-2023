import genreService from "../services";

export default (dependencies) => {

    const createGenre = async (request, response, next) => {
        // Input
        const { name } = request.body;
        // Treatment
        const genre = await genreService.createGenre(name, dependencies);
        //output
        response.status(201).json(genre);
    };

    const getGenre = async (request, response, next) => {
        //input
        const genreId = request.params.id;
        // Treatment
        const genre = await genreService.getGenre(genreId, dependencies);
        //output
        response.status(200).json(genre);
    };
    
    const listGenres = async (request, response, next) => {
        // Treatment
        const genres = await genreService.find(dependencies);
        //output
        response.status(200).json(genres);
    };


    return {
       createGenre,
        getGenre,
        listGenres
    };
};
