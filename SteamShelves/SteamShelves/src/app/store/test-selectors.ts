import { createSelector } from "@ngrx/store";
import { AppState } from "./app-state";

export const selectMoviesFeature = (state: AppState) => state.movies;

export const selectAllMovies = createSelector(
    selectMoviesFeature,
    (state) => state.allMovies
);
//ovo je bolji nacin nego steate.movies.allMovies, pravili smo feature zbog ovoga
//jedan razlog je memorizacija, jer createSelector je cista funkcija, i kesira izlaze, kada dobije isti ulaz sl put
//nece da ponovo okine funkcija vec ce da vrati samo kesirano, sto ubrzava app, jer je bitno da se ne izvrsava logika ponovo
//vec da se ubrza 

export const selectSelectedMovieId = createSelector(
    selectMoviesFeature,
    (state) => state.selectedMovieID
);

//sada preko ova dva selectora iskombinujemo dva parceta i dobijamo ono sto nam treba
export const selectSelectedMovie = createSelector(
    selectAllMovies,
    selectSelectedMovieId,
    (allMovies, movieID) => allMovies.find(movie => movie.id === movieID) ?? null
    //?? da ne pisemo if , dobar operator, vrati movie al ako je undefined vrati mi null
    
    //da smo imali tri selectora imali bi 3 paramatra ulazne funk, a iammo dva allMovies i movieID
    //veoma BITNO da kombinujemo selektore i vratimo nesto iz stora, nema potrebe da se vraca iz apija movie ako je vec u storu
)