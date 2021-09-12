import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { GamesState } from "./games.reducer";



export const selectGamesFeature = createSelector(
    (state: AppState) => state.games,
    (games) => games
);

// export const selectGameByAppId = (props: {appid: number}) =>
//     createSelector(
//         selectGamesFeature,
//         (state: GamesState) =>     
//             Object.create(
//             state.entities.find(element => element.steam_appid === props.appid)
//         ) 
//     );