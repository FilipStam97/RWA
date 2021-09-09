
import { createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";
import { AppState } from "../app.state";
import * as Actions from "./user.actions"



export interface UserState  {
  _id: string;
  username: string;
  
}

export const initialState: UserState = {
       _id: "",
       username: ""
  }

export const userReducer = createReducer(
  initialState,
  on(Actions.authSucces, (state, {user} ) => ({
      ...state,
      _id: user._id,
      username: user.username
  }))
);