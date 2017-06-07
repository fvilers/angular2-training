import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { ErrorSubject } from './core/services';
import { CurrentAccountService } from './accounts/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'The Nexus 2';
  public token: string;

  constructor(
    errorSubject: ErrorSubject,
    snackBar: MdSnackBar,
    @Inject(DOCUMENT) private document,
    private currentAccount: CurrentAccountService,
    private router: Router
  ) {
    const snackBarDefaultConfig = new MdSnackBarConfig();
    snackBarDefaultConfig.duration = 1500;

    errorSubject
      .getObservable()
      .subscribe(x => snackBar.open('😿 We are sorry, but an error has occured.', null, snackBarDefaultConfig))
    ;

    currentAccount
      .get()
      .subscribe(token => this.token = token)
    ;
  }

  toggleTheme() {
    this.document.querySelector('body').classList.toggle('dark');
  }

  logOut() {
    this.currentAccount.clear();
    this.router.navigateByUrl('/');
  }
}
