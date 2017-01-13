import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CounterComponent } from '../components';

const routes: Routes = [
  {path: '', children: [], component: CounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
