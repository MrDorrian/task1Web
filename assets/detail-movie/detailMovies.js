'use strict';

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
    const newArrData = data.find(dataArr => dataArr.id === Number(idNew))
    window.scrollTo({top: 100});
    createDetailButtons();
    createDetailMovie(newArrData);
    createBackImage(newArrData);
    createDetailInfo(newArrData);
    checkFavoriteFile(newArrData, idNew);
    nextDetailMovie(data, idNew);
}

function createFuncBtn() {
    const getBackBtn = document.getElementById('backButton');

    getBackBtn.addEventListener('click', () => {
        if (detailMovie.firstChild) {
            for (let i = 1; i <= 4; i++) {
                detailMovie.removeChild(detailMovie.lastChild);
            }
            mainLayout.classList.remove('display-none');
            detailBlock.classList.add('display-none');
        }
    })
}

function checkFavoriteFile(data, id) {
    let checkArrayFavorite = [];
    const addFavorite = document.getElementById('addFavorite');

    if (localStorage.getItem('favorite')) {
        let checkFavorite = JSON.parse(localStorage.getItem("favorite"));
        checkArrayFavorite = checkFavorite.find(check => check.id === Number(id));
        if (checkArrayFavorite) {
            addFavorite.classList.remove('addFavoriteBtn');
            addFavorite.classList.add('hideBtnFavorite');
        }
    }
    addFavoriteFilm(data);

}

function addFavoriteFilm(data) {

    addFavorite.addEventListener('click', () => {
        let favoritesArray = [];

        if (localStorage.getItem('favorite')) {
            favoritesArray = JSON.parse(localStorage.getItem("favorite"));
        }
        favoritesArray.push(data);
        localStorage.setItem('favorite', JSON.stringify(favoritesArray));
        addFavorite.classList.remove('addFavoriteBtn');
        addFavorite.classList.add('hideBtnFavorite');
    })
}

function nextDetailMovie(data, nextId) {
    const getNextBtn = document.getElementById('nextButton');
    getNextBtn.addEventListener('click', () => {
            let newArrData1 = data.find(dataArr => dataArr.id === Number(nextId))
            let newIndexDataArr = data.indexOf(newArrData1)
            let nextMovieCreate = data[newIndexDataArr + 1]

            if (detailMovie.firstChild) {
                for (let i = 1; i <= 4; i++) {
                    detailMovie.removeChild(detailMovie.lastChild);
                }
            }
            filterAndCreateMovie(data, nextMovieCreate.id);
        }
    )
}

