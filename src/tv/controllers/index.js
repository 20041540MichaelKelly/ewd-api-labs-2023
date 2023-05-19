import tvService from "./../services";

export default (dependencies) => {

    const getTvShow = async (request, response, next) => {
        //input
        const tvShowId = request.params.id;
        // Treatment
        const tvShow = await tvService.getTvShow(tvShowId, dependencies);
        //output
        response.status(200).json(tvShow);
    };

    // const getUpcomingMovies = async (request, response, next) => {
    //     // Treatment
    //     const movie = await moviesService.getUpcomingMovies(movieId, dependencies);
    //     //output
    //     response.status(200).json(movie);
    // };
    const listTvShows = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        const tvShows = await tvService.find(query, dependencies);
        //output
        response.status(200).json(tvShows);
    };

    return {
        getTvShow,
        listTvShows,
        //getUpcomingMovies
    };
};
