import { createSelector } from "@ngrx/store";
import { Game } from "src/app/models/game";
import { AppState } from "../app.state";
import { GamesState } from "./games.reducer";



export const selectGamesFeature = createSelector(
    (state: AppState) => state.games,
    (games) => games
);

export const selectGameByAppId = (appid: number) =>
    createSelector(
        selectGamesFeature,
        (state: GamesState) =>  <Game>state.entities[appid]
    );


export const selectGamesWithIds = (ids: number[]) => 
        createSelector(
            selectGamesFeature,
            (state: GamesState) => ids.map(id => <Game>state.entities[id])
        );