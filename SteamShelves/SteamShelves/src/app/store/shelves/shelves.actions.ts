import { createAction, props } from "@ngrx/store";
import { Shelve } from "src/app/models/shelve";



export const loadShelves = createAction(
    "Load Shelves",
    props<{userID: string}>()
);

export const loadShelvesSucces = createAction(
    "Load Shelves Succes",
    props<{shelves: Shelve[]}>()
);