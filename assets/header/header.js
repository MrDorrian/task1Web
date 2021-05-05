const headerName = document.getElementById('headerName');

headerName.addEventListener('click', () => {
    CURRENT_PAGE = 1;
    getData(BASE_URL_DATA)
        .then(response => response.json())
        .then(data => {
            totalDB = data;
            createMovies(data);
            upgradePagination(CURRENT_PAGE);
            createPagination(newArrPagination);
        });
})