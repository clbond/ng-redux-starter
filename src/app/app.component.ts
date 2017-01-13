import { Component, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import {
  DevToolsExtension,
  NgRedux,
} from 'ng2-redux';

import { NgReduxRouter } from 'ng2-redux-router';

import { EpicToken } from '../epics';
import { AuthService } from '../services';
import { AppState } from '../store';
import { configureStore } from '../store/configure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<AppState>,
    private ngReduxRouter: NgReduxRouter,
    //@Inject(EpicToken) private epics: Array<any>,
  ) {
    configureStore(devTools, ngRedux, [] /* epics */);

    ngReduxRouter.initialize();
  }

  ngOnInit() {
    setTimeout(() => {
      if (!this.auth.isAuthenticated()) {
        this.auth.lock();
      }
    },
    0);
  }
}