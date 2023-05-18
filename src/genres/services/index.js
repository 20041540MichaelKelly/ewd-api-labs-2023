import Genres from '../entities/Genres';

export default {
  createGenre: async  (name ,{ genresRepository }) => {
    const genre = new Genres(undefined, name);
    return genresRepository.persist(genre);
  },
  getGenre: (genreId, {genresRepository}) => {
    return genresRepository.get(genreId);
  },
  find: ({genresRepository})=>{
    return genresRepository.find();
  }
};
