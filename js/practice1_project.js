"use strict"


const numberOffFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


let personalMovieDB = {
count: numberOffFilms,
  movies: {},
  actors: {},
  gender: [],
  privat: false
};

const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
      reviewFilm = prompt("На сколько оцените его?", ""),
      lastFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
      reviewFilm2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = reviewFilm;    // если бы lastFilm записали через  . то кириличесские данные записались бы неверно
personalMovieDB.movies[lastFilm2] = reviewFilm2;

console.log(numberOffFilms);
console.log(personalMovieDB);
