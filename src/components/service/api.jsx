import axios from 'axios';

const MY_KEY = '0ce765f590cdfc1a886df1afd7d175f9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const searchTrendDayMovie = async () => {
  const response = await axios.get(`trending/all/day?api_key=${MY_KEY}`);
  return await response.data;
};

export const searchMovieById = async id => {
    const response = await axios.get(
    `movie/${id}?api_key=${MY_KEY}&language=en-US`
  );
  return await response.data;
}

export const searchMovie = async query => {
    const response = await axios.get(
        `search/movie?api_key=${MY_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return await response.data;
}
export const searchMovieCredits = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${MY_KEY}&language=en-US`
  );
  return await response.data;
};

export const searchMovieReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${MY_KEY}&language=en-US&page=1`
  );
  return await response.data;
};