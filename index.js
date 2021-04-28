'use strict'
const API_DATA = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=';
let CURRENT_PAGE = 1;
const BASE_URL_DATA = `${API_DATA}` + `${CURRENT_PAGE}`;

const movies = document.getElementById('root');
let newMovie = [];

function getData(url) {
    return fetch(url);
}

function createMovies(data) {
    newMovie = [];
    movies.innerText = '';
    newMovie = data.results.map((movie) => createCardImage(movie));
    movies.append(...newMovie);
}

function createCardImage(movie) {
    const {id, original_title, backdrop_path} = movie;
    const img = document.createElement('img');

    if (backdrop_path === null) {
        const poster_url = './assets/img/Aw07IupDF1ubyVNrcWwDPbnCQRP.jpg';
        img.setAttribute('src', poster_url);
    } else {
        const poster_url = 'https://image.tmdb.org/t/p/w300' + `${backdrop_path}`;
        img.setAttribute('src', poster_url);
    }

    img.setAttribute('id', id);
    img.setAttribute('alt', original_title);
    img.classList.add('movie-image');
    return img;
}

getData(BASE_URL_DATA)
    .then(response => response.json())
    .then(data => createMovies(data));

const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

btnPrev.addEventListener('click', () => {
    if (CURRENT_PAGE >= 2) {
        CURRENT_PAGE--;
        getData(API_DATA + CURRENT_PAGE)
            .then(response => response.json())
            .then(data => createMovies(data));
    }
});

btnNext.addEventListener('click', () => {
    ++CURRENT_PAGE;
    getData(API_DATA + CURRENT_PAGE)
        .then(response => response.json())
        .then(data => createMovies(data));
});