import { CounterState } from './counter';
import { SessionState } from './session';

export interface AppState {
  session?: SessionState;
  counter?: CounterState;
}
