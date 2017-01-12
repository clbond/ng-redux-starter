import { Action } from 'redux';

import { CounterState } from './state';

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from './actions';

const initialState: CounterState = {counter: 0};

export const counterReducer =
    (state: CounterState = initialState, action: Action): CounterState => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {counter: state.counter + 1};
    case DECREMENT_COUNTER:
      return {counter: state.counter - 1};
    default:
      return state;
  }
}
