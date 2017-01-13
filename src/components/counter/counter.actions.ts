import { Injectable } from '@angular/core';

import { NgRedux } from 'ng2-redux';

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  AppState,
} from '../../store';

@Injectable()
export class CounterActions {
  constructor(private ngRedux: NgRedux<AppState>) {}

  increment() {
    this.ngRedux.dispatch({type: INCREMENT_COUNTER});
  }

  decrement() {
    this.ngRedux.dispatch({type: DECREMENT_COUNTER});
  }
}
