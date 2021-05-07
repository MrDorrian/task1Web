'use strict'

const headerMenu = document.getElementById('headerMenu');
const favoriteBlock = document.getElementById('favoriteBlock');
const favoriteMovies = document.getElementById('favoriteMovies');

function filterAndCreateFavorite(data) {
    data.map((fav) => {
        createFavoriteMenu(fav);
    });
}

function createFavoriteMenu(data) {
    const favoriteBlock = document.createElement('div');
    const favoriteInfo = document.createElement('div');
    const imageFavorite = document.createElement('img');
    const nameFavorite = document.createElement('h2');
    const overviewFavorite = document.createElement('p');
    const unFavoriteBtn = document.createElement('div');
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
    unFavoriteBtn.setAttribute('id', 'unFavoriteBtn');
    imageFavorite.dataset.id = id;
    unFavoriteBtn.dataset.deleteId = id;
    nameFavorite.textContent = title;
    overviewFavorite.textContent = overview;
    unFavoriteBtn.textContent = 'Unfavorite';

    favoriteBlock.classList.add('favoriteBlock');
    favoriteInfo.classList.add('favoriteInfo');
    nameFavorite.classList.add('nameFavorite');
    overviewFavorite.classList.add('overviewFavorite');
    unFavoriteBtn.classList.add('unFavoriteBtn');

    favoriteInfo.append(nameFavorite, unFavoriteBtn, overviewFavorite)
    favoriteBlock.append(imageFavorite, favoriteInfo);

    favoriteMovies.append(favoriteBlock);
}

headerMenu.addEventListener('click', () => {
        mainLayout.classList.add('display-none');
        detailBlock.classList.add('display-none');
        favoriteBlock.classList.remove('display-none');
        let listFavorite = [];

        if (favoriteMovies.firstChild) {
            while (favoriteMovies.firstChild) {
                favoriteMovies.removeChild(favoriteMovies.lastChild);
            }
        }
        listFavorite = JSON.parse(localStorage.getItem("favorite"));
        filterAndCreateFavorite(listFavorite);
        deleteFavoriteBtn();
    }
)


function deleteFavoriteBtn() {
    let unFavorite = [...document.getElementsByClassName('unFavoriteBtn')];
    unFavorite.map((fav) => {
        fav.addEventListener('click', (e) => {
            const {target: {dataset: {deleteId}}} = e;
            deleteFromLocal(deleteId)
        })
    })
}

favoriteMovies.addEventListener('click', (e) => {
        const {target: {dataset: {id}}} = e;
        let idFavoritNew = id;
        if (idFavoritNew) {
            favoriteBlock.classList.add('display-none');
            detailBlock.classList.remove('display-none');
            filterAndCreateMovie(totalDB.results, idFavoritNew);
        }
    }
)

function deleteFromLocal(delId) {
    let getMovieArray = JSON.parse(localStorage.getItem("favorite"));
    let deleteMovieArray = getMovieArray.find((dma) => dma.id === Number(delId))
    let indexDelete = getMovieArray.indexOf(deleteMovieArray);
    getMovieArray.splice(indexDelete, 1);
    let newarrrr = [];
    newarrrr = getMovieArray;

    localStorage.setItem('favorite', JSON.stringify(newarrrr));
}