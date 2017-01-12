import { Component, Inject } from '@angular/core';

import {
  DevToolsExtension,
  NgRedux,
} from 'ng2-redux';

import { NgReduxRouter } from 'ng2-redux-router';

import { EpicToken } from '../epics';
import { AppState } from '../store';
import { configureStore } from '../store/configure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<AppState>,
    private ngReduxRouter: NgReduxRouter,
    @Inject(EpicToken) private epics: Array<any>,
  ) {
    configureStore(devTools, ngRedux, epics);

    ngReduxRouter.initialize();
  }

  ngOnInit() {
    this.ngRedux.dispatch({type: 'LOGIN'});
  }
}