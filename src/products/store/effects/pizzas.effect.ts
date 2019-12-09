import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as pizzaActions from '../actions/pizzas.action';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromServices from '../../services';

@Injectable()
export class PizzaEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS),
    switchMap(() =>
      this.pizzaService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      )
    )
  );
}
