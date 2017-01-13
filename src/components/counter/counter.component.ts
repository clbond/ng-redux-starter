import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { select } from 'ng2-redux';

import { CounterActions } from './counter.actions';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @select(s => s.counter.counter) public counter$: Observable<number>;

  constructor(public actions: CounterActions) {}
}
