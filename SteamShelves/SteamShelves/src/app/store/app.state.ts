import { User } from "../models/user";
import { GamesState } from "./games/games.reducer";
import { ShelvesState } from "./shelves/shelves.reducer";
import { UserState } from "./user/user.reducer";


export interface AppState {
    user: UserState,
    shelves: ShelvesState
    games: GamesState

}