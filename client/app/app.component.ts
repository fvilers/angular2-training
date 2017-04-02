import { Component } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { DocumentService, ErrorSubject } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Nexus';

  constructor(errorSubject: ErrorSubject, snackBar: MdSnackBar, private documentService: DocumentService) {
    const snackBarDefaultConfig = new MdSnackBarConfig();
    snackBarDefaultConfig.duration = 1500;

    errorSubject
      .getObservable()
      .subscribe(x => snackBar.open('😿 We are sorry, but an error has occured.', null, snackBarDefaultConfig));
  }

  toggleTheme() {
    this.documentService.querySelector('body').classList.toggle('dark');
  }
}
