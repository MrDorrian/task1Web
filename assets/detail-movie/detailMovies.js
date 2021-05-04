'use strict';

const mainLayout = document.getElementById('mainLayout');
const detailMoviesId = document.getElementById('root');
const detailBlock = document.getElementById('detailBlock');
const detailMovie = document.getElementById('detailMovie');

detailMoviesId.addEventListener('click', (e) => {
    const {target: {dataset: {id}}} = e;
    let idNew = id;
    if (idNew) {
        mainLayout.classList.add('display-none');
        detailBlock.classList.remove('display-none');
        filterDetailMovie(totalDB.results, idNew);
    }
})

function filterDetailMovie(data, idNew) {
    const newArrData = data.find(dataArr => dataArr.id === Number(idNew));
    console.log(newArrData);
    createDetailMovie(newArrData);
}

function createDetailMovie(data) {
    const {id, original_title, poster_path} = data;
    const imgDetail = document.createElement('img');
    const poster_url = 'https://image.tmdb.org/t/p/w300' + `${poster_path}`;
    imgDetail.setAttribute('src', poster_url);
    imgDetail.setAttribute('id', id);
    imgDetail.setAttribute('alt', original_title);

    createDetailInfo(data);
    detailMovie.append(imgDetail);
}

function createDetailInfo(data) {
    const {original_title, vote_average, overview, release_date} = data;

    const divMain = document.createElement('div');
    const movieName = document.createElement('h2');
    const infoVote = document.createElement('p');
    const overView = document.createElement('p');
    const releaseDate = document.createElement('p');

    divMain.classList.add('infoMovieBlock')
    movieName.classList.add('movieName');
    infoVote.classList.add('inlineBlock');
    releaseDate.classList.add('inlineBlock');
    overView.classList.add('movieInfo');

    movieName.textContent = original_title;
    infoVote.textContent = vote_average;
    releaseDate.textContent = release_date;
    overView.textContent = overview;


    divMain.append(movieName, infoVote, releaseDate, overView);

    detailMovie.append(divMain);
}