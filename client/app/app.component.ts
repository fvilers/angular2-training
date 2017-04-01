import { Component } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { ErrorSubject } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Nexus';
  inverted = false;

  constructor(errorSubject: ErrorSubject, snackBar: MdSnackBar) {
    const snackBarDefaultConfig = new MdSnackBarConfig();
    snackBarDefaultConfig.duration = 1500;

    errorSubject
      .getObservable()
      .subscribe(x => snackBar.open('😿 We are sorry, but an error has occured.', null, snackBarDefaultConfig));
  }
}
