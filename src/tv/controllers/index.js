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

    const getTvShowImages = async (request, response, next) => {
        //input
        const tvShowId = request.params.id;
        // Treatment
        const tvShow = await tvService.getTvShowImages(tvShowId, dependencies);
        //output
        response.status(200).json(tvShow);
    };
    const listTvShows = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        const tvShows = await tvService.find(query, dependencies);
        //output
        response.status(200).json(tvShows);
    };
    const getTvShowCredits= async (request, response, next) => {
        //input
        const tvShowId = request.params.id;
        // Treatment
        const tvShow = await tvService.getTvShowCredits(tvShowId, dependencies);
        //output
        response.status(200).json(tvShow);
    };
    const getTvShowAggregateCredits = async (request, response, next) => {
        //input
        const tvShowId = request.params.id;
        // Treatment
        const tvShow = await tvService.getTvShowAggregateCredits(tvShowId, dependencies);
        //output
        response.status(200).json(tvShow);
    };
    const getSimilarTvShows = async (request, response, next) => {
        //input
        const tvShowId = request.params.id;
        // Treatment
        const tvShow = await tvService.getSimilarTvShows(tvShowId, dependencies);
        //output
        response.status(200).json(tvShow);
    };
    return {
        getTvShow,
        listTvShows,
        getTvShowImages,
        getTvShowCredits,
        getTvShowAggregateCredits,
        getSimilarTvShows
        //getUpcomingMovies
    };
};
