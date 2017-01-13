import { NgModule } from '@angular/core';

import { SessionEpics } from './session';

import { EpicToken } from './token';

@NgModule({
  providers: [
    SessionEpics,
    {provide: EpicToken, useExisting: SessionEpics, multi: true},
  ]
})
export class EpicsModule {}
