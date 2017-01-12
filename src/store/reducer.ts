import { combineReducers } from 'redux';

import { counterReducer } from './counter';
import { sessionReducer } from './session';

export const rootReducer = combineReducers({
  counter: counterReducer,
  session: sessionReducer,
});
