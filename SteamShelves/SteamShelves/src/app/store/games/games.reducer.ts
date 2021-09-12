import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Game } from "src/app/models/game";
import * as GamesActions from "./games.actions";



export interface GamesState extends EntityState<Game> {

}

const adapter = createEntityAdapter<Game>({
    selectId: (game) => game.steam_appid
});

const initialState = adapter.getInitialState();

export const gamesReducer = createReducer(
  initialState,
  on(GamesActions.loadGamesSucces, (state, { games }) =>
    adapter.setAll(games, state)
  )
);