import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { AppState } from "../app.state";
import * as Actions from "./user.actions"



const initialState: AppState = {
    userID: 0,
    username: ""
}

export const userReducer = createReducer(
  initialState,
  on(Actions.authSucces, (state, { user }) => ({
    ...state,
    userId: user.userID,
    username: user.username,
  }))
);