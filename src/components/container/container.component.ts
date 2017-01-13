import { Component } from '@angular/core';

import { AuthService } from '../../services';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  constructor(private auth: AuthService) {}

  onLogout() {
    this.auth.logout();
    this.auth.lock();
  }
}
