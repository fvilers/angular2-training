import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { PageNotFoundComponent } from './components';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './testing';
import { DocumentService, ErrorSubject, ObservableErrorHandler, WindowService } from './services';

@NgModule({
  imports: [
    BrowserAnimationsModule,
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
  providers: [
    {
        provide: ErrorHandler,
        useClass: ObservableErrorHandler
    },
    ErrorSubject,
    DocumentService,
    WindowService
  ]
})
export class CoreModule { }
