import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { PageNotFoundComponent } from './components';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './testing';
import { WindowService } from './services';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [
    PageNotFoundComponent,
    RouterLinkStubDirective,
    RouterOutletStubComponent
  ],
  declarations: [
    PageNotFoundComponent,
    RouterLinkStubDirective,
    RouterOutletStubComponent
  ],
  providers: [WindowService]
})
export class CoreModule { }
