import { environment } from '../environments/environment';

const createLogger = require('redux-logger');

const persistState = require('redux-localstorage');

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
