import { createReducer, on, StateObservable } from "@ngrx/store";
import { Movie } from "../models/movie";
import * as Actions from "./test-actions";

// Paziti da se slucajno ne menja store negde jer je to strasan bag da se javi
//moze da se izbegne na dva nacina da se u run time-u stavi da ne moz se menja ili da se u compile time-u
// stavi read only tako da ne moze da se slicajno menja sto znaci da ne mogu da odem u state i da promenim jedan 
// objekat movie vec moram ceo state sto je u skladu sa samim paternom
export interface MovieState {
    //allMovies: Movie[];
    allMovies: ReadonlyArray<Movie>;
    selectedMovieID: number;

}

export const initialState: MovieState = {
    allMovies: [],
    selectedMovieID: -1
}

export const MovieReducer = createReducer(
  initialState,
  on(
    Actions.setRating,
    (state: MovieState, { movieID, newRating }: any) => ({
      ...state,
      allMovies: state.allMovies.map((movie: Movie) =>
        movie.id === movieID ? { ...movie, score: newRating } : movie
      ),
    })
    // funckija u reduceru ima propsove tj oblik akcije koje prima
    // const foundMovie: Movie | undefined = state.allMovies.find((movie: Movie) => movie.id === movieID);
    // if(!foundMovie){
    //     // mozda ne nadje film pa vrati undefined, pa vratimo stari state
    //     // Petku je pocrveneo i skapirao da moze da vrati undefined meni nije , ikd sto, ma da njemu nije ni trazio da definise state type
    //     return state;
    // }
    // const newMovie: Movie = {...foundMovie, score: newRating};
    // const newMoviesArray: ReadonlyArray<Movie> = state.allMovies.map((movie: Movie) =>
    //   movie.id === newMovie.id ? newMovie : movie
    // );
    // return {...state, allMovies: newMoviesArray};
    // ovo ispod je ulepsano i sredjeno, jednostavnije napisano i more slick, i ultra kompaktno

    // return {...state, allMovies: state.allMovies.map((movie: Movie) =>
    //     movie.id === movieID ?
    //     {...movie, score: newRating} :
    //     movie
    //   )};
    // ... spread operator {... state}, pravi se novi objekat ali su unutrasnji propretiji ostali isti, reference na iste propretije
    // spread razlaze samo prvi nivo propretija, veoma je bitan operator u reduks paternu
    //prakticno ovde zamenjujemos taro stanje novim i postujemo patern
    // spred operator ako nema taj propreti doda novi ili pregazi ako vec postoji taj property

    // ako imamo samo return u funkciji mozemo da obrisemo return i samo pisemo blok za funkciju i to je automatski to
    // return x === => ({x}) obicne zagrade jer se zbuni pa misli da je blok funkcije a ovako zna da je obj.

    // ima puno rucnog rada da se napravi state da bi se izbegle greske, kao sto se da videti, 
    //ali ima i bolji nacin, sl casa cemo to sad samo osnova
  )
);