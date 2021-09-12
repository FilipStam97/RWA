import { createAction, props } from "@ngrx/store";
import { Game } from "src/app/models/game";
import { Shelve } from "src/app/models/shelve";

export const loadGames = createAction(
    "Load Games",
    props<{gameIDs: Array<number>}>()

);

export const loadGamesSucces = createAction(
    "Load Games Succes",
    props<{games: Game[]}>()
);