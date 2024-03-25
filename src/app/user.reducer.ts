// user.reducer.ts
import { ActionReducer, ActionReducerMap, MetaReducer,createReducer, on } from '@ngrx/store';
import { User } from './user.model';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './user.action';

/* export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state,action);
    return result;
  };
} */

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export interface State {}
export const reducers: ActionReducerMap<State> = {
    userSelector: userReducer
}

/* export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [] */
