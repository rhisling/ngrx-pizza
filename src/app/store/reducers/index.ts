import * as fromRouter from '@ngrx/router-store';
import { Params } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers = {
  routerReducer: fromRouter.routerReducer,
};
