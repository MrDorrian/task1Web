let dataBase = {};
fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c \n')
    .then(response => response.json())
    .then(data => dataBase = data);

let timerId = setInterval(() => console.log(dataBase), 2000);
setTimeout(() => clearInterval(timerId), 5000);
