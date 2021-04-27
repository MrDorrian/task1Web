'use strict'

let dataBase = [];
fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
    .then(response => response.json())
    .then(data => dataBase = data.results);

const movies = document.getElementById('root');
const timeId = setInterval(() => {
    const newMovie = dataBase.map((movie) => createCardImage(movie));
    movies.append(...newMovie);
    console.log(dataBase);
}, 2000);
setTimeout(() => clearInterval(timeId), 3000);

function createCardImage(movie) {
    const {original_title, backdrop_path} = movie;
    const poster_url = 'https://image.tmdb.org/t/p/w342' + `${backdrop_path}`;
    const img = document.createElement('img');

    img.setAttribute('src', poster_url);
    img.setAttribute('alt', original_title);
    img.classList.add('movie-image');

    return img;
}
