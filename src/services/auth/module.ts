import { NgModule } from '@angular/core';

import { AuthService } from './auth';

@NgModule({
  providers: [
    AuthService,
  ]
})
export class AuthModule {}
