import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

import {
  NgReduxModule,
  DevToolsExtension,
} from 'ng2-redux';

import { NgReduxRouterModule } from 'ng2-redux-router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { EpicsModule } from '../epics';

import {
  LoginModule,
} from '../components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    NgReduxModule,
    NgReduxRouterModule,
    AppRoutingModule,
    LoginModule,
    EpicsModule,
  ],
  providers: [
    DevToolsExtension,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
