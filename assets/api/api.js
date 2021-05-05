'use strict'

const API_DATA = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=';
let CURRENT_PAGE = 1;
const BASE_URL_DATA = API_DATA + CURRENT_PAGE;