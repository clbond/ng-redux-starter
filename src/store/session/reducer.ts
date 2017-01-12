import { Action } from 'redux';

import { SessionState } from './state';

import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './actions';

const initialState: SessionState = {};

export const sessionReducer =
    (state: SessionState = initialState, action: Action): SessionState => {
  switch (action.type) {
    case LOGIN:
    case LOGIN_FAILURE:
    case LOGIN_SUCCESS:
    default:
      return state;
  }
}
