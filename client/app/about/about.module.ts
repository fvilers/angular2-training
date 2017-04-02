import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components';

@NgModule({
  imports: [
    MaterialModule,
    AboutRoutingModule
  ],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule { }
