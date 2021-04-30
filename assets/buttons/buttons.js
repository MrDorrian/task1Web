'use strict'

const changeBtn = document.getElementById('paginationBtn');
const firstBtn = document.getElementById('firstBtn');
const prevBtn = document.getElementById('prevBtn');

function dataButtons(data) {
    const {page, total_pages} = data;

    for (let i = page; i <= total_pages; i++) {
        createPagination(i);
        if (i >= total_pages) {
            pagination.append(createNextBtn, createLastBtn);
            const lastBtn = document.getElementById('lastBtn');
            const nextBtn = document.getElementById('nextBtn');

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
            });

            nextBtn.addEventListener('click', () => {
                if (CURRENT_PAGE < total_pages) {
                    ++CURRENT_PAGE;
                    getData(API_DATA + CURRENT_PAGE)
                        .then(response => response.json())
                        .then(data => createMovies(data));
                }
            });
        }
    }
}

function createPagination(i) {
    const divPagination = document.createElement('div');
    divPagination.classList.add('pagination-buttons',);
    divPagination.textContent = i;
    createPaginationBtn.append(divPagination);

}

changeBtn.addEventListener('click', (e) => {
    const {target: {innerText}} = e;
    CURRENT_PAGE = innerText;
    getData(API_DATA + innerText)
        .then(response => response.json())
        .then(data => createMovies(data));
});

firstBtn.addEventListener('click', () => {
    CURRENT_PAGE = 1;
    getData(BASE_URL_DATA)
        .then(response => response.json())
        .then(data => createMovies(data));
});

prevBtn.addEventListener('click', () => {
    if (CURRENT_PAGE >= 2) {
        CURRENT_PAGE--;
        getData(API_DATA + CURRENT_PAGE)
            .then(response => response.json())
            .then(data => createMovies(data));
    }
});


