import FantasyMovie from '../entities/FantasyMovie';

export default {
  registerFantasyMovie: async (title, time, genres, date, productionCompany, image, { fantasyMovieRepository, authenticator }) => {
    console.log("Validating that title does not exist!");
    const result = await fantasyMovieRepository.getByTitle(title);
    if (result) {
      console.log("Title already exists! ");
      throw new Error('Title already exists! ');
    }
    console.log("Beginning Fantasy Movie Creation process...");
    const fantasyMovie = new FantasyMovie(undefined, title, time, genres, date, productionCompany, image);
    console.log("Fantasy Movie Creation process finished!");
    return fantasyMovieRepository.persist(fantasyMovie);
  },
  getFanatasyMovie: (fantasyMovieId, { fantasyMovieRepository }) => {
    console.log("Checking for movies...");
    return fantasyMovieRepository.get(fantasyMovieId);
  },
  getFantasyMovieFortitle: async (title, { fantasyMovieRepository }) => {
    console.log("Checking if title exists for fantasy movie...");
    return fantasyMovieRepository.getBytitle(title);
  },
  
  find: ({ fantasyMovieRepository }) => {
    console.log("Getting fantasy movies...");

    return fantasyMovieRepository.find();
  }

};


