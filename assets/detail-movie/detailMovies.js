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
    const newArrData = data.find(dataArr => dataArr.id === Number(idNew));
    window.scrollTo({top: 100});
    createDetailButtons();
    createDetailMovie(newArrData);
    createBackImage(newArrData);
    createDetailInfo(newArrData);
    addToFavorite(newArrData);
}

function createFuncBtn() {
    const getBackBtn = document.getElementById('backButton');
    const getNextBtn = document.getElementById('nextButton');

    getBackBtn.addEventListener('click', () => {
        if (detailMovie.firstChild) {
            for (let i = 1; i <= 4; i++) {
                detailMovie.removeChild(detailMovie.lastChild);
            }
            mainLayout.classList.remove('display-none');
            detailBlock.classList.add('display-none');
        }
    })
    getNextBtn.addEventListener('click', () => {
        alert('ok')
    })
}

function addToFavorite(data) {
    const addFavorite = document.getElementById('addFavorite');

    addFavorite.addEventListener('click', () => {
        let favoritesArray = [];
        if (localStorage.getItem('favorite')) {
            favoritesArray = JSON.parse(localStorage.getItem("favorite"));
        }
        favoritesArray.push(data);
        localStorage.setItem('favorite', JSON.stringify(favoritesArray));
    })
}