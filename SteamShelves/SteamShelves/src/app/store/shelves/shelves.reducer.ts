
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Shelve } from "src/app/models/shelve";
import * as ShelvesActions from "./shelves.actions";



export interface ShelvesState extends EntityState<Shelve> {
    
}

const adapter = createEntityAdapter<Shelve>({
    selectId: (shelve) => shelve._id
});

const initialState = adapter.getInitialState();

export const shelvesReducer = createReducer(
  initialState,
  on(ShelvesActions.loadShelvesSucces, (state, { shelves }) =>
    adapter.setAll(shelves, state)
  )
);

