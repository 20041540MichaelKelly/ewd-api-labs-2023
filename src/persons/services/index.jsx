import axios from 'axios';

export default {
   getPersons: async (page) => {
    page ? page : 1;
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
      );
          return response.data;
    },
  
    getPerson:async(personId) => {
        const response = await axios.get( 
          `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.TMDB_KEY}`
      );
      return response.data;
    },
  
    getActorCredits:async(personId) => {
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
  
    // export const getActorImages = (person) => {
    //   const [, idPart] = queryKey;
    //   const { id } = idPart;
    //   return fetch(
    //     `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    //   ).then( (response) => {
    //     if (!response.ok) {
    //       throw new Error(response.json().message);
    //     }
    //     return response.json();
    
    //   })
    //   .catch((error) => {
    //     throw error
    //  });
    // };
  
    // export const getGenders = async () => {
    //   return fetch(
    //     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    //       import.meta.env.VITE_TMDB_KEY +
    //       "&language=en-US"
    //   ).then( (response) => {
    //     if (!response.ok) {
    //       throw new Error(response.json().message);
    //     }
    //     return response.json();
    //   })
    //   .catch((error) => {
    //     throw error
    //  });
    // };
};