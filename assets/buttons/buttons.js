'use strict'

const changeBtn = document.getElementById('paginationBtn');
const firstBtn = document.getElementById('firstBtn');
const prevBtn = document.getElementById('prevBtn');

const newArrPagination = [];
const newPagination = [];

function dataButtons(data) {
    const {page, total_pages} = data;

    for (let i = page; i <= total_pages; i++) {
        newPagination.push(i);
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
                            totalDB = data;
                            createMovies(data);
                            upgradePagination(CURRENT_PAGE);
                            createPagination(newArrPagination);
                        });
                }
            });

            nextBtn.addEventListener('click', () => {
                if (CURRENT_PAGE < total_pages) {
                    ++CURRENT_PAGE;
                    getData(API_DATA + CURRENT_PAGE)
                        .then(response => response.json())
                        .then(data => {
                            totalDB = data;
                            createMovies(data);
                            upgradePagination(CURRENT_PAGE);
                            createPagination(newArrPagination);
                        });
                }
            });
        }
    }
}

for (let i = CURRENT_PAGE; i <= CURRENT_PAGE + 4; i++) {
    newArrPagination.push(i);
}

function createPagination(newArr) {
    if (createPaginationBtn.firstChild) {
        for (let i = 0; i <= 4; i++) {
            createPaginationBtn.firstChild.remove();
        }
    }
    newArr.map(pagin => {
        const divPagination = document.createElement('div');
        divPagination.classList.add('pagination-buttons',);
        divPagination.textContent = pagin;
        createPaginationBtn.append(divPagination);
    })
}

function upgradePagination(CURRENT_PAGE) {
    if (CURRENT_PAGE + 4 <= newPagination.length) {
        for (let i = CURRENT_PAGE; i <= CURRENT_PAGE + 4; i++) {
            newArrPagination.push(i);
            newArrPagination.shift(i);
        }
    } else if (CURRENT_PAGE <= newPagination.length) {
        for (let i = CURRENT_PAGE; i >= CURRENT_PAGE - 4; i--) {
            newArrPagination.pop(i);
            newArrPagination.unshift(i);
        }
    }
}

createPagination(newArrPagination);

changeBtn.addEventListener('click', (e) => {
    const {target: {innerText}} = e;
    CURRENT_PAGE = Number(innerText);
    if (CURRENT_PAGE <= newPagination.length) {
        getData(API_DATA + innerText)
            .then(response => response.json())
            .then(data => {
                totalDB = data;
                createMovies(data);
                upgradePagination(CURRENT_PAGE);
                createPagination(newArrPagination);
            });
    }
});


firstBtn.addEventListener('click', () => {
    CURRENT_PAGE = 1;
    getData(BASE_URL_DATA)
        .then(response => response.json())
        .then(data => {
            totalDB = data;
            createMovies(data);
            upgradePagination(CURRENT_PAGE);
            createPagination(newArrPagination);
        });
});

prevBtn.addEventListener('click', () => {
    if (CURRENT_PAGE >= 2) {
        CURRENT_PAGE--;
        getData(API_DATA + CURRENT_PAGE)
            .then(response => response.json())
            .then(data => {
                totalDB = data;
                createMovies(data);
                upgradePagination(CURRENT_PAGE);
                createPagination(newArrPagination);
            });
    }
});


