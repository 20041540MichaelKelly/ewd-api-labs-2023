import axios from 'axios';

export default {
    getUpcomingMovies: async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false`
          );
          return response.data;
    },
    getMovie: async (movieId) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
          );
          return response.data;
    },
    find: async (query) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
          );
          return response.data;
    },
    getGenres: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
      );
      return response.data;
    },
  
   getVotes: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
      );
      return response.data;
    },
    
    getMovieImages: async (imageId) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${imageId}/images?api_key=${process.env.TMDB_KEY}`
      );
      return response.data;
      },
    
  
    getMovieReviews: async (reviewId) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${reviewId}/reviews?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
      },
  
    postMovieReviews: async (id) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
      },
  
    getUpcomingMovies: async (page) => {
        const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
        );
        return response.data;
      },
  
      getMoviesNowPlaying:async (page) => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
          );
        return response.data;
      },

      getPopularMovies:async (page) => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
          );
        return response.data;
      },

      getMovieCredits: async (id) => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`
          );
          return response.data;
        },
  
  //     export const getPopularMovies = ({queryKey}) => {
  //       const [, pagePart] = queryKey;
  //       const { page } = pagePart;
  //       page ? page : 1;
  //       return fetch(
  //         `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
  //         ).then((response) => {
  //           if (!response.ok) {
  //             throw new Error(response.json().message);
  //           }
  //           return response.json();
  //         })
  //         .catch((error) => {
  //            throw error
  //         });
  //       };
  
  //       export const getMovieCredits = ( {queryKey} ) => {
  //        const [, idPart] = queryKey;
  //        const { id } = idPart;
  //         return fetch(
  //           `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  //           ).then((response) => {
  //             if (!response.ok) {
  //               throw new Error(response.json().message);
  //             }
  //             return response.json();
  //           })
  //           .catch((error) => {
  //              throw error
  //           });
  //         };
  
  //         export const getSimilarMovies = ( {queryKey} ) => {
  //           const [, idPart] = queryKey;
  //           const { id } = idPart;
  //            return fetch(
  //              `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  //              ).then((response) => {
  //                if (!response.ok) {
  //                  throw new Error(response.json().message);
  //                }
  //                return response.json();
  //              })
  //              .catch((error) => {
  //                 throw error
  //              });
  //            };
  
  
  
  
  //   /*----------------Tv Shows--------------------------*/
  
  //   export const getTvShows = ({queryKey}) => {
  //     const [, pagePart] = queryKey;
  //     const { page } = pagePart;
  //     page ? page : 1;
  //     return fetch(
  //       `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  //     ).then((response) => {
  //       if (!response.ok) {
  //         throw new Error(response.json().message);
  //       }
  //       return response.json();
  //     })
  //     .catch((error) => {
  //        throw error
  //     });
  //   };
      
  //     export const getTvShow= ({ queryKey }) => {
  //       const [, idPart] = queryKey;
  //       const { id } = idPart;
  //       return fetch(
  //         `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  //       ).then(res => res.json());
  //     };
      
  //     export const getTvShowImages = ({ queryKey }) => {
  //       const [, idPart] = queryKey;
  //       const { id } = idPart;
  //       return fetch(
  //         `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  //       ).then( (response) => {
  //         if (!response.ok) {
  //           throw new Error(response.json().message);
  //         }
  //         return response.json();
  //       })
  //       .catch((error) => {
  //         throw error
  //      });
  //     };
  
  //     export const getTvShowCredits = ( {queryKey} ) => {
  //       const [, idPart] = queryKey;
  //       const { id } = idPart;
  //        return fetch(
  //          `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  //          ).then((response) => {
  //            if (!response.ok) {
  //              throw new Error(response.json().message);
  //            }
  //            return response.json();
  //          })
  //          .catch((error) => {
  //             throw error
  //          });
  //        };
  
  //        export const getTvShowAggregateCredits = ( {queryKey} ) => {
  //         const [, idPart] = queryKey;
  //         const { id } = idPart;
  //          return fetch(
  //            `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  //            ).then((response) => {
  //              if (!response.ok) {
  //                throw new Error(response.json().message);
  //              }
  //              return response.json();
  //            })
  //            .catch((error) => {
  //               throw error
  //            });
  //          };
  
  //        export const getSimilarTvShows = ( {queryKey} ) => {
  //         const [, idPart] = queryKey;
  //         const { id } = idPart;
  //          return fetch(
  //            `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  //            ).then((response) => {
  //              if (!response.ok) {
  //                throw new Error(response.json().message);
  //              }
  //              return response.json();
  //            })
  //            .catch((error) => {
  //               throw error
  //            });
  //          };
  
  //          export const getTvGenres = async () => {
  //           return fetch(
  //             "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
  //               import.meta.env.VITE_TMDB_KEY +
  //               "&language=en-US"
  //           ).then( (response) => {
  //             if (!response.ok) {
  //               throw new Error(response.json().message);
  //             }
  //             return response.json();
  //           })
  //           .catch((error) => {
  //             throw error
  //          });
  //         };

  // };
    };
  
