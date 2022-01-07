const api_key = process.env.REACT_APP_MOVIES_API_KEY;
const api_url = process.env.REACT_APP_MOVIES_API_URL;
const api_token = process.env.REACT_APP_MOVIES_API_TOKEN;

console.log(api_key);
console.log(api_url);

const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${api_token}`,
};

export const getGenreList = () =>
  fetch(`${api_url}/genre/movie/list`, { headers })
    .then((res) => res.json())
    .catch((e) => console.log(e));

export const getMoviesByGenre = (genre) =>
  fetch(`${api_url}/discover/movie?&with_genres=${genre}`, { headers })
    .then((res) => res.json())
    .catch((e) => console.log(e));

export const getMovieKeywords = (movie_id) =>
  fetch(`${api_url}/movie/${movie_id}/keywords`, { headers })
    .then((res) => res.json())
    .catch((e) => console.log(e));

export const searchForMovie = (query) =>
  fetch(`${api_url}/search/movie?&language=en-US&query=${query}`, { headers })
    .then((res) => res.json())
    .catch((e) => console.log(e));
