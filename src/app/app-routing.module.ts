import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
