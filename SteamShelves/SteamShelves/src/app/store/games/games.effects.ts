import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { GamesService } from "src/app/services/games.service";
import * as GamesActions from "./games.actions"
import * as ShelvesActions from "../shelves/shelves.actions"







@Injectable()
export class GamesEffects {
    constructor(private gamesService: GamesService, private action$: Actions ) {}

    gamesEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(GamesActions.loadGames),
      switchMap(({ gameIDs }) =>
        this.gamesService.getGames(gameIDs).pipe(
          map((games) => GamesActions.loadGamesSucces({ games })),
          catchError(() => of({ type: 'Games error' }))
        )
      )
    )
  );

 
}
