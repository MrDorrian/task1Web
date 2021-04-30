'use strict'

const pagination = document.getElementById('pagination');

const createFirstBtn = document.createElement('div');
const createPrevBtn = document.createElement('div');
const createNextBtn = document.createElement('div');
const createLastBtn = document.createElement('div');
const createPaginationBtn = document.createElement('div');

createFirstBtn.textContent = 'First';
createPrevBtn.textContent = 'Prev';
createNextBtn.textContent = 'Next';
createLastBtn.textContent = 'Last';

createFirstBtn.setAttribute('id', 'firstBtn');
createPrevBtn.setAttribute('id', 'prevBtn');
createNextBtn.setAttribute('id', 'nextBtn');
createLastBtn.setAttribute('id', 'lastBtn');
createPaginationBtn.setAttribute('id', 'paginationBtn');

createFirstBtn.classList.add('button-footer');
createPrevBtn.classList.add('button-footer');
createNextBtn.classList.add('button-footer');
createLastBtn.classList.add('button-footer');
createPaginationBtn.classList.add('display-flex-buttons');

pagination.append(createFirstBtn, createPrevBtn, createPaginationBtn);