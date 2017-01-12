import { Observable } from 'rxjs';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';

import {
  LOGIN,
  Action,
} from '../store';

export class SessionEpics {
  login(action$: Observable<Action<any>>) {
    return action$.filter(a => a.type === LOGIN).mapTo({type: 'PONG'});
  }
}
