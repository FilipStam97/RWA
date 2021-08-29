import { createAction, props } from "@ngrx/store";
import { Movie } from "../models/movie";


export const setRating = createAction(
    "Set Movie Rating",
    props<{
        movieID: number,
        newRating: number
        // rating moze da bude inkrement , new rating kako god, kako ga zamislimo
    }>()
);

export const loadMovies = createAction(
    "Load Movies",
    props<{
        movies: Movie[]
    }>()
)

export const selectMovie = createAction(
    "Select Movie",
    props<{
        movieID: number
    }>()
)