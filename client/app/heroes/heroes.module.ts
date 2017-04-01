import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core';
import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroCardComponent, HeroDetailComponent, HeroesComponent, HeroFilterComponent } from './components';
import { HeroRolePipe, HeroUniversePipe } from './pipes';
import { HeroService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
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
  providers: [HeroService],
})
export class HeroesModule { }
