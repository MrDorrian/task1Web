'use strict';

const mainLayout = document.getElementById('mainLayout');
const detailMovies = document.getElementById('root');
const section = document.createElement('section');

detailMovies.addEventListener('click', (e) => {
    const {target: {dataset: {id}}} = e;
    let idNew = id;
    if (idNew) {
        mainLayout.classList.add('display-none');
        console.log(idNew);
        createDetailMovie(totalDB.results, idNew);
    }
})

function createDetailMovie(data, idNew) {
    const {id, original_title, poster_path} = data;
    const imgDetail = document.createElement('img');
    console.log(data);
    if (id === idNew) {

        const poster_url = 'https://image.tmdb.org/t/p/w300' + `${poster_path}`;
        imgDetail.setAttribute('src', poster_url);
        imgDetail.setAttribute('id', id);
        imgDetail.setAttribute('alt', original_title);

        mainLayout.append(imgDetail);
    }


}