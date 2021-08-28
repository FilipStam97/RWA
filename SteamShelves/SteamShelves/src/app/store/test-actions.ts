import { createAction, props } from "@ngrx/store";


export const setRating = createAction(
    "Set Movie Rating",
    props<{
        movieID: number,
        newRating: number
        // rating moze da bude inkrement , new rating kako god, kako ga zamislimo
    }>()
);