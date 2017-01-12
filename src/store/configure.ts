import { environment } from '../environments/environment';

import {
  DevToolsExtension,
  NgRedux,
} from 'ng2-redux';

import {
  Epic,
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable';

const createLogger = require('redux-logger');

const persistState = require('redux-localstorage');

import { rootReducer } from './reducer';

export const middleware = [];

if (environment.production === false) {
  middleware.push(
    createLogger({
      level: 'info',
      collapsed: true,
      stateTransformer: s => s,
    }));
}

export const enhancers = [
  persistState('', {
    key: 'ng-redux-starter',
    serialize: store => JSON.stringify(store),
    deserialize: state => JSON.parse(state),
  })
];

export const configureStore =
    (devTools: DevToolsExtension, ngRedux: NgRedux<any>, epics: Array<any>) => {
  const tools = devTools.isEnabled() ? [devTools.enhancer()] : [];

  ngRedux.configureStore(
    rootReducer,
    {},
    [
      ...middleware,
      createEpicMiddleware(composeEpics(epics)),
    ],
    [
      ...tools,
      ...enhancers,
    ]);
};

export const composeEpics = (epics: Array<any>): Epic<any> => {
  const all = epics.map(e =>
    Object.keys(Object.getPrototypeOf(e)).map(k => e[k].bind(e)));

  const flattened = all.reduce((p, c) => p.concat(c), []);

  return combineEpics(...flattened);
};
