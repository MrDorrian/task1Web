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
        filterAndCreateMovie(totalDB.results, idNew);
    }
})

function filterAndCreateMovie(data, idNew) {
    const newArrData = data.find(dataArr => dataArr.id === Number(idNew));
    createDetailButtons();
    createDetailMovie(newArrData);
    createBackImage(newArrData);
    createDetailInfo(newArrData);
}

function createDetailMovie(data) {
    const {id, original_title, poster_path} = data;
    const imgDetail = document.createElement('img');
    const poster_url = 'https://image.tmdb.org/t/p/w300' + `${poster_path}`;
    imgDetail.setAttribute('src', poster_url);
    imgDetail.setAttribute('id', id);
    imgDetail.setAttribute('alt', original_title);
    imgDetail.classList.add('movieImage');
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
    infoVote.textContent = `Score: ${vote_average}`;
    releaseDate.textContent = `Release Date: ${release_date}`;
    overView.textContent = overview;

    divMain.append(movieName, infoVote, releaseDate, overView);
    detailMovie.append(divMain);
}

function createBackImage(data) {
    const {original_title, poster_path} = data;
    const backgroundImage = document.createElement('img');
    const poster_url = 'https://image.tmdb.org/t/p/w300' + `${poster_path}`;

    backgroundImage.setAttribute('src', poster_url);
    backgroundImage.setAttribute('alt', original_title);
    backgroundImage.classList.add('backImage');

    detailMovie.append(backgroundImage);
}

function createDetailButtons() {
    const buttonDiv = document.createElement('div')
    const backButton = document.createElement('div');
    const nextButton = document.createElement('div');
    backButton.textContent = 'Back to list';
    nextButton.textContent = 'Next Movie';

    backButton.classList.add('detailBtnBack');
    nextButton.classList.add('detailBtnNext');

    buttonDiv.append(backButton, nextButton)
    detailMovie.append(buttonDiv);
}