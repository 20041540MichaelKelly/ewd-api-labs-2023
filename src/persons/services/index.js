import axios from 'axios';

export default {
  getPersons: async (page) => {
    page ? page : 1;
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
    );
    return response.data;
  },

  getPerson: async (personId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getActorCredits: async (personId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  listPeople: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },
  getActorImages: async (personId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${personId}/images?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

};