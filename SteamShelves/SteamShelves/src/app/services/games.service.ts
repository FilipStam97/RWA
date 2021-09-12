import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';
import { errorHandler } from './errorHandler';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  
  constructor(private httpClient: HttpClient) { }

  getGames(gamesIDs: Array<number>) {
    const req = {
      gameIDs: gamesIDs,
    }
    return this.httpClient.post<Game[]>(`${environment.apiUrl}/games`, req).
    pipe(catchError(errorHandler));
  }
}
