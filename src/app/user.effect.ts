// user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ApiService } from './api.service';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './user.action';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.dataService.getUsers()
      .pipe(
        map(users => loadUsersSuccess({ users })),
        catchError(error => of(loadUsersFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: ApiService
  ) {}
}
