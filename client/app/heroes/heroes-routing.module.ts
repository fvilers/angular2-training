import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent, HeroesComponent } from './components';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'heroes/:name',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HeroesRoutingModule { }
