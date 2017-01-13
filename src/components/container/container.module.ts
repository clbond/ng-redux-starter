import { NgModule } from '@angular/core';

import {
  MdIconModule,
  MdToolbarModule,
} from '@angular/material';

import { ContainerComponent } from './container.component';

@NgModule({
  imports: [
    MdIconModule,
    MdToolbarModule,
  ],
  declarations: [
    ContainerComponent,
  ],
  exports: [
    ContainerComponent,
  ]
})
export class ContainerModule {}
