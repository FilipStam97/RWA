import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { ShelvesService } from "src/app/services/shelves.service";
import * as ShelvesActions from "./shelves.actions"




@Injectable()
export class ShelvesEffects {
  constructor(
    private shelvesService: ShelvesService,
    private action$: Actions
  ) {}

  shelvesEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(ShelvesActions.loadShelves),
      switchMap(({ userID }) =>
        this.shelvesService.getShelves(userID).pipe(
          map((shelves) => ShelvesActions.loadShelvesSucces({ shelves })),
          catchError(() => of({ type: 'Shelves error' }))
        )
      )
    )
  );
}