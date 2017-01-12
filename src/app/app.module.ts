import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  NgReduxModule,
  DevToolsExtension,
} from 'ng2-redux';

import { NgReduxRouterModule } from 'ng2-redux-router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    AppRoutingModule,
  ],
  providers: [
    DevToolsExtension,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
