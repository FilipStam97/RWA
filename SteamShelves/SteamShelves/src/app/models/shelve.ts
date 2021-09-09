import { Game } from "./game";

export interface Shelve {
    _id: string;
    userID: string;
    title: string;
    description: string;
    games: Array<Game>;
    
}