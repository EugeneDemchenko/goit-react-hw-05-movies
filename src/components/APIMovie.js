import axios from 'axios';
const API_KEY = '0d9cabf706122997f9c3cb7ffb9ac57a';
const BASE_URL = 'https://api.themoviedb.org/3';

export function GetTrending() {
  return axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      return response.data.results;
    });
}

export function SearchMovies(query) {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=uk&query=${query}`
    )
    .then(response => {
      return response.data.results;
    });
}
export function GetMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=uk`)
    .then(response => {
      return response.data;
    });
}
export function GetMovieCredits(movieId) {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=uk`
    )
    .then(response => {
      return response.data.cast;
    });
}
export function GetMovieReviews(movieId) {
  return axios
    .get(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=uk&page=1`
    )
    .then(response => {
      return response.data.results;
    });
}