import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroUniversePipe } from './hero-universe.pipe';
import { HeroRolePipe } from './hero-role.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroFilterComponent } from './hero-filter/hero-filter.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroesComponent,
    HeroCardComponent,
    HeroUniversePipe,
    HeroRolePipe,
    PageNotFoundComponent,
    HeroFilterComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
