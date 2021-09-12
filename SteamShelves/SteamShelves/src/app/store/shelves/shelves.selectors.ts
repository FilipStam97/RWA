import { flatten } from "@angular/compiler";
import { createSelector } from "@ngrx/store";
import { concat } from "rxjs";
import { Shelve } from "src/app/models/shelve";
import { AppState } from "../app.state";
import { ShelvesState } from "./shelves.reducer";

export const selectShelvesFeature = createSelector(
    (state: AppState) => state.shelves,
    (shelves) => shelves
);



export const selectAllShelves = createSelector(
    selectShelvesFeature,
    (state: ShelvesState) => Object
        .values(state.entities)
        .filter(shelve => shelve != null)
        .map(shelve => <Shelve>shelve)
);

export const selectAllGameIDs = createSelector(
  selectShelvesFeature,
  (state: ShelvesState) =>
    [... new Set(flatten(
      Object.values(state.entities)
        .filter((shelve) => shelve != null)
        .map((shelve) => <Array<number>>shelve?.gameIDs)
    ))]
);
