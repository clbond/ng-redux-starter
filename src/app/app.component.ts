import { Component, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import {
  DevToolsExtension,
  NgRedux,
} from 'ng2-redux';

import { NgReduxRouter } from 'ng2-redux-router';

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
  ) {
    configureStore(devTools, ngRedux, []);

    ngReduxRouter.initialize();
  }

  async ngOnInit() {
    if (!await this.auth.isAuthenticated()) {
      this.auth.lock();
    }
  }
}