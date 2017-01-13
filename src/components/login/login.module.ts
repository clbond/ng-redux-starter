import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdSlideToggleModule,
} from '@angular/material';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSlideToggleModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule {}