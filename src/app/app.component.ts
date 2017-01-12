import { Component, Inject } from '@angular/core';

import {
  DevToolsExtension,
  NgRedux,
  select
} from 'ng2-redux';

import { NgReduxRouter } from 'ng2-redux-router';

import {
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable';

//import { EpicsToken, Epic } from '../epics';

import {
  AppState,
  rootReducer,
} from '../store';

import {
  enhancers,
  middleware,
} from '../store/configure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<AppState>,
    private ngReduxRouter: NgReduxRouter,
//    @Inject(EpicsToken) private epics: Array<Epic>,
  ) {
//    middleware.push(createEpicMiddleware(combineEpics(...epics)));

    const tools = devTools.isEnabled() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      [
        ...tools,
        ...enhancers,
      ]);

    ngReduxRouter.initialize();
  }
}