import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CoreModule } from '../core';
import { HeroesRoutingModule } from './heroes-routing.module';

import { environment } from '../../environments/environment';

import { HeroCardComponent, HeroDetailComponent, HeroesComponent, HeroFilterComponent } from './components';
import { HeroRolePipe, HeroUniversePipe } from './pipes';
import { HeroService, HeroServiceMock } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CoreModule,
    HeroesRoutingModule
  ],
  exports: [],
  declarations: [
    HeroCardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroFilterComponent,
    HeroRolePipe,
    HeroUniversePipe
  ],
  providers: [{
      provide: HeroService,
      useClass: environment.test.useMocks ? HeroServiceMock : HeroService
  }],
})
export class HeroesModule { }
