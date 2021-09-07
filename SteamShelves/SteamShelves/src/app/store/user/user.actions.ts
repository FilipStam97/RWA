import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user";




export const auth = createAction(
    "Authenticate User",
    props<{username: string, password: string}>()
);

export const authSucces = createAction(
        "Authentication Succes",
        props<{user: User}>()
);