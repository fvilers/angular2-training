import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { PageNotFoundComponent, ToolbarComponent } from './components';
import { WindowService } from './services';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [
    PageNotFoundComponent,
    ToolbarComponent
  ],
  declarations: [
    PageNotFoundComponent,
    ToolbarComponent
  ],
  providers: [WindowService],
})
export class CoreModule { }
