import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";

import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroUniversePipe } from './hero-universe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroesComponent,
    HeroCardComponent,
    HeroUniversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
