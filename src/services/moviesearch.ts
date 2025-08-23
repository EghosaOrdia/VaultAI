const MOVIE_API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${MOVIE_API_KEY}`,
  },
};

const searchMovie = (query: string) => {
  return (
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .catch((err) => console.error(err))
  );
};

export default searchMovie;
