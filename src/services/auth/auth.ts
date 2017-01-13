import {
  Injectable,
  EventEmitter,
  Output,
} from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';

import Auth0Lock from 'auth0-lock';

import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
  @Output() public authenticated = new EventEmitter<void>();

  private authlock = new Auth0Lock(
    environment.authenticationToken,
    environment.authenticationDomain,
    {});

  constructor() {
    this.authlock.on('authenticated',
      authResult => {
        localStorage.setItem('id_token', authResult.idToken);

        this.authenticated.emit(void 0);
      });
  }

  public lock() {
    this.authlock.show();
  }

  public isAuthenticated() {
    return tokenNotExpired();
  }

  public logout() {
    localStorage.removeItem('id_token');
  }
}
