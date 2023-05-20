import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        //input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        //output
        response.status(200).json(movie);
    };

    const getUpcomingMovies = async (request, response, next) => {
        // Treatment
        const movies = await moviesService.getUpcomingMovies(dependencies);
        //output
        response.status(200).json(movies);
    };
    const find = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        const movies = await moviesService.find(query, dependencies);
        //output
        response.status(200).json(movies);
    };

    const getMovieImages = async (request, response, next) => {
        const movieId = request.params.id;

        // Treatment
        const images = await moviesService.getMovieImages(movieId, dependencies);
        //output
        response.status(200).json(images);
    };

    const getMovieReviews = async (request, response, next) => {
        const movieId = request.params.id;

        // Treatment
        const reviews = await moviesService.getMovieReviews(movieId, dependencies);
        //output
        response.status(200).json(reviews);
    };

    return {
        getMovie,
        find,
        getUpcomingMovies,
        getMovieImages,
        getMovieReviews
    };
};
