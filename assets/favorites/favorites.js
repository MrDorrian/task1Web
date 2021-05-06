'use strict'

const headerMenu = document.getElementById('headerMenu');
const favoriteBlock = document.getElementById('favoriteBlock');
const favoriteMovies = document.getElementById('favoriteMovies');
let favorite = [];

function filterAndCreateFavorite(data) {
    favorite = data.map((fav) => {
        createFavoriteMenu(fav);
        favoriteMovies.append(...favorite);
    });
}

function createFavoriteMenu(data) {
    const favoriteBlock = document.createElement('div');
    const favoriteInfo = document.createElement('div');
    const imageFavorite = document.createElement('img');
    const nameFavorite = document.createElement('h2');
    const overviewFavorite = document.createElement('p');
    const unfavoriteBtn = document.createElement('div');
    const {id, title, poster_path, overview} = data;

    if (poster_path === null) {
        const favorUrl = './assets/img/unnamed.jpg';
        imageFavorite.setAttribute('src', favorUrl);
    } else {
        const favorUrl = 'https://image.tmdb.org/t/p/w300' + poster_path;
        imageFavorite.setAttribute('src', favorUrl);
    }
    favoriteMovies.setAttribute('name', 'favorite');
    imageFavorite.setAttribute('id', id);
    imageFavorite.setAttribute('alt', title);

    nameFavorite.textContent = title;
    overviewFavorite.textContent = overview;
    unfavoriteBtn.textContent = 'Unfavorite';

    favoriteBlock.classList.add('favoriteBlock');
    favoriteInfo.classList.add('favoriteInfo');
    nameFavorite.classList.add('nameFavorite');
    overviewFavorite.classList.add('overviewFavorite');
    unfavoriteBtn.classList.add('unfavoriteBtn');

    favoriteInfo.append(nameFavorite, unfavoriteBtn, overviewFavorite)
    favoriteBlock.append(imageFavorite, favoriteInfo);

    favoriteMovies.append(favoriteBlock);
}

headerMenu.addEventListener('click', () => {
    mainLayout.classList.add('display-none');
    detailBlock.classList.add('display-none');
    favoriteBlock.classList.remove('display-none');

    let listFavorite = [];
    listFavorite = JSON.parse(localStorage.getItem("favorite"));
    filterAndCreateFavorite(listFavorite);
})

