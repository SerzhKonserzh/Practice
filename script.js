const personalMovieDB={
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function(){
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели","0");
      while(personalMovieDB.count==''|| personalMovieDB.count==null || isNaN(personalMovieDB.count)){
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели","0");
      }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
      if(personalMovieDB.count<10){
         alert("Мало")
        }else if(personalMovieDB.count>=10&&personalMovieDB.count<=30){
         alert("Нормально");
        }else if(personalMovieDB.count>30){
         alert("Много");
        }else{
         alert("Ошибка");
        }
    },
    writeYourGenres: function(){
/*       for(let i=1;i<4;i++){
         do{
            genre = prompt(`Ваш любимый жанр под номером ${i}`,"");
         }while(genre==null||genre=='')
         personalMovieDB.genres[i-1]=genre;
     } */
     let genre;
     do{
      genre = prompt(`Введите ваши любимые жанры через запятую`);
     }while(genre==null||genre=='')
     genre=genre.split(",");
     for(let i=0;i<genre.length;i++)
     {
        personalMovieDB.genres[i]=genre[i];
     }
     personalMovieDB.genres.sort();
     personalMovieDB.genres.forEach(function(item,i){
         console.log(`Любимый жанр #${i+1} - это ${item}`);
     });
    },
    showMyDB: function(){
      if(personalMovieDB.private == false){
         console.log(personalMovieDB);        
      }else{
          console.log("Ошибка доступа");
      }
    },
    toogleVisibleMyDB: function(){
      personalMovieDB.private=!personalMovieDB.private;
    }
 };

 personalMovieDB.start();
 personalMovieDB.rememberMyFilms();
 personalMovieDB.detectPersonalLevel();
 personalMovieDB.writeYourGenres();
 personalMovieDB.toogleVisibleMyDB();
 personalMovieDB.showMyDB();

 

 