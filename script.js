 const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели","0");
 const personalMovieDB={
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     private: false
 };
 const lastOne = prompt("Один из последних фильмов?","");
 const markOne = prompt("Оценка","");
 const lastTwo = prompt("Один из последних фильмов?","");
 const markTwo = prompt("Оценка","");
 
 personalMovieDB.movies[lastOne] = markOne;
 personalMovieDB.movies[lastTwo] = markTwo;

 console.log(personalMovieDB);

 