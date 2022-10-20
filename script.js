"use strict";
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilms = prompt('Один из последних просмотренных фильмов?', "");
const gradeLastFilm = prompt('На сколько оцените его?', "");

personalMovieDB.movies[lastFilms] = gradeLastFilm;
console.log(personalMovieDB);