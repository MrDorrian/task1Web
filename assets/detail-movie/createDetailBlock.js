function createDetailInfo(data) {
    const {original_title, vote_average, overview, release_date} = data;

    const divMain = document.createElement('div');
    const movieName = document.createElement('h2');
    const infoVote = document.createElement('p');
    const overView = document.createElement('p');
    const releaseDate = document.createElement('p');
    const addFavorite = document.createElement('div');

    divMain.classList.add('infoMovieBlock')
    movieName.classList.add('movieName');
    infoVote.classList.add('inlineBlock');
    releaseDate.classList.add('inlineBlock');
    overView.classList.add('movieInfo');
    addFavorite.classList.add('addFavoriteBtn');

    movieName.textContent = original_title;
    infoVote.textContent = `Score: ${vote_average}`;
    releaseDate.textContent = `Release Date: ${release_date}`;
    overView.textContent = overview;
    addFavorite.textContent = 'Add to favorite';

    addFavorite.setAttribute('id', 'addFavorite');

    divMain.append(addFavorite, movieName, infoVote, releaseDate, overView);
    detailMovie.append(divMain);
}

function createDetailButtons() {
    const buttonDiv = document.createElement('div')
    const backButton = document.createElement('div');
    const nextButton = document.createElement('div');
    const backBtnImg = document.createElement('img');
    const nextBtnImg = document.createElement('img');

    backButton.textContent = 'Back to list';
    nextButton.textContent = 'Next Movie';

    backButton.setAttribute('id', 'backButton');
    nextButton.setAttribute('id', 'nextButton');
    backBtnImg.setAttribute('src', './assets/img/outline_navigate_before_white_24dp.png');
    nextBtnImg.setAttribute('src', './assets/img/outline_chevron_right_white_24dp.png');

    backButton.classList.add('detailBtnBack');
    nextButton.classList.add('detailBtnNext');
    buttonDiv.classList.add('buttonBlock');
    backBtnImg.classList.add('backBtnImg');
    nextBtnImg.classList.add('nextBtnImg');

    buttonDiv.append(backBtnImg, backButton, nextButton, nextBtnImg)
    detailMovie.append(buttonDiv);

    createFuncBtn();
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

function createBackImage(data) {
    const {original_title, poster_path} = data;
    const backgroundImage = document.createElement('img');
    const poster_url = 'https://image.tmdb.org/t/p/w300' + `${poster_path}`;

    backgroundImage.setAttribute('src', poster_url);
    backgroundImage.setAttribute('alt', original_title);
    backgroundImage.classList.add('backImage');

    detailMovie.append(backgroundImage);
}
