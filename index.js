'use strict'

let newMovie = [];
let totalDB = [];

const movies = document.getElementById('root');

function getData(url) {
    return fetch(url);
}

function createMovies(data) {
    newMovie = [];
    movies.innerText = '';
    newMovie = data.results.map((movie) => createCardImage(movie));
    buttonsPagin(totalDB);
    movies.append(...newMovie);
}

function createCardImage(movie) {
    const {id, original_title, poster_path} = movie;
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');


    if (poster_path === null) {
        const poster_url = './assets/img/unnamed.jpg';
        img.setAttribute('src', poster_url);
    } else {
        const poster_url = 'https://image.tmdb.org/t/p/w300' + `${poster_path}`;
        img.setAttribute('src', poster_url);
    }

    img.setAttribute('id', id);
    img.setAttribute('alt', original_title + id);
    img.classList.add('movie-image');

    p.textContent = original_title;
    p.classList.add('display-none');

    div.classList.add('display-inline');
    div.append(p, img);

    return div;
}

getData(BASE_URL_DATA)
    .then(response => response.json())
    .then(data => {
        totalDB = data;
        createMovies(data);
    });



