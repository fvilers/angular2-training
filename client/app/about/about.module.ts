import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components';

@NgModule({
  imports: [AboutRoutingModule],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule { }
