import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { ErrorSubject } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Nexus';

  constructor(errorSubject: ErrorSubject, snackBar: MdSnackBar, @Inject(DOCUMENT) private document) {
    const snackBarDefaultConfig = new MdSnackBarConfig();
    snackBarDefaultConfig.duration = 1500;

    errorSubject
      .getObservable()
      .subscribe(x => snackBar.open('😿 We are sorry, but an error has occured.', null, snackBarDefaultConfig));
  }

  ngOnInit() {
    //window['prerenderReady'] = true;
  }

  toggleTheme() {
    this.document.querySelector('body').classList.toggle('dark');
  }
}
