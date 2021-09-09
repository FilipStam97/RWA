import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { UserService } from "src/app/services/user.service";
import * as UserActions from "./user.actions"




@Injectable()
export class UserEffects {
  constructor(private userService: UserService, private action$: Actions) {}

  authEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.auth),
      switchMap(({ username, password }) =>
        this.userService.authUser(username, password).pipe(
          map((user) => UserActions.authSucces({ user })),
          catchError(() => of({ type: 'Auth error' }))
        )
      )
    )
  );
}