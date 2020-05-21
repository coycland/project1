"use strict"


let numberOffFilms;

function start() {
  numberOffFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  // задаем условие спрашивать до тех пор пока он ничего не вводит, нажимает отмену или вводит не число
  while (numberOffFilms == '' || numberOffFilms == null || isNaN(numberOffFilms)) {
    numberOffFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

let personalMovieDB = {
count: numberOffFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;   // если бы lastFilm записали через  . то кириличесские данные записались бы неверно
        console.log('Done');
    } else {
      console.log('Error');
      i--;
    }
         
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

// можно и так, так как в значении сразу стоит true или false
//function showMyDB (hidden) {
//  if (!hidden) {
//    console.log(personalMovieDB);
//  }
//}

//showMyDB(personalMovieDB.privat);



function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    // более развернуто
    //const e = prompt(`Ваш любимый жанр под номером ${i}`, "");
    //personalMovieDB.genres[i-1] = e;
  }
}

writeYourGenres();
showMyDB();

