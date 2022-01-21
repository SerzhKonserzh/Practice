 let numberOfFilms;

 const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
 };

 start();
 rememberMyFilms();
 detectPersonalLevel();
 writeYourGenres();
 showMyDB();

 function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","0");
    while(numberOfFilms==''|| numberOfFilms == numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","0");
    }
    personalMovieDB.count=numberOfFilms;
 }

 function rememberMyFilms(){
    for(let i=0;i<2;i++){
     const last = prompt("Один из последних фильмов?","");
     const mark = prompt("Оценка","");
     if(last==null||mark==null||(last==''||mark=='')||(last.length>50||mark.length>50))
     {
         i--;
         continue;
     }
     personalMovieDB.movies[last] = mark;
    }
 }
 
 function detectPersonalLevel(){
    if(personalMovieDB.count<10){
     alert("Мало")
    }else if(personalMovieDB.count>=10&&personalMovieDB.count<=30){
     alert("Нормально");
    }else if(personalMovieDB.count>30){
     alert("Много");
    }else{
     alert("Ошибка");
    }
 }

 function showMyDB(){
     if(personalMovieDB.private == false){
        console.log(personalMovieDB);        
     }else{
         console.log("Ошибка доступа");
     }
 }

 function writeYourGenres(){
    for(let i=1;i<4;i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`,"");
        personalMovieDB.genres[i-1]=genre;
    }
 }

 

 