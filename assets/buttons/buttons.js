'use strict'

const firstBtn = document.getElementById('firstBtn');
const lastBtn = document.getElementById('lastBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const changeBtn = document.getElementById('pagination');


function buttonsPagin(data) {
    const {page, total_pages} = data;
    const pagination = document.getElementById('pagination');
    const divPagination = document.createElement('div');

    for (let i = 1; i <= total_pages; i++) {
        divPagination.classList.add('pagination-buttons', 'display-flex-buttons');
        divPagination.textContent = page;
        pagination.append(divPagination);
        i++;
    }
}

changeBtn.addEventListener('click', (e) => {
    const {target: {innerText}} = e;
    getData(API_DATA + innerText)
        .then(response => response.json())
        .then(data => createMovies(data));
})

firstBtn.addEventListener('click', () => {
    getData(BASE_URL_DATA)
        .then(response => response.json())
        .then(data => createMovies(data));
})

lastBtn.addEventListener('click', () => {
    const {total_pages} = totalDB;
    CURRENT_PAGE = total_pages;
    if (CURRENT_PAGE <= total_pages) {
        getData(API_DATA + total_pages)
            .then(response => response.json())
            .then(data => {
                createMovies(data);
            });
    }

})

prevBtn.addEventListener('click', () => {
    if (CURRENT_PAGE >= 2) {
        CURRENT_PAGE--;
        getData(API_DATA + CURRENT_PAGE)
            .then(response => response.json())
            .then(data => createMovies(data));
    }
});

nextBtn.addEventListener('click', () => {
    ++CURRENT_PAGE;
    getData(API_DATA + CURRENT_PAGE)
        .then(response => response.json())
        .then(data => createMovies(data));
});
