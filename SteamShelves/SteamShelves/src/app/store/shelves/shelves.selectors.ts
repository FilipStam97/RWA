import { createSelector } from "@ngrx/store";
import { Shelve } from "src/app/models/shelve";
import { AppState } from "../app.state";
import { ShelvesState } from "./shelves.reducer";

export const selectMoviesFeature = createSelector(
    (state: AppState) => state.shelves,
    (shelves) => shelves
);

export const selectAllShelves = createSelector(
    selectMoviesFeature,
    (state: ShelvesState) => Object
        .values(state.entities)
        .filter(shelve => shelve != null)
        .map(shelve => <Shelve>shelve)
);
