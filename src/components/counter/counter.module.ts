import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CounterActions } from './counter.actions';

import { CounterComponent } from './counter.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CounterComponent,
  ],
  providers: [
    CounterActions,
  ],
  exports: [
    CounterComponent,
  ]
})
export class CounterModule {}
