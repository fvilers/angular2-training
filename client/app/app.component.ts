import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { ErrorSubject } from './core/services';
import { CurrentAccountService } from './accounts/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'The Nexus';
  public token: string;

  constructor(
    errorSubject: ErrorSubject,
    snackBar: MdSnackBar,
    @Inject(DOCUMENT) private document,
    private currentAccount: CurrentAccountService
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

  ngOnInit(): void {
    window['prerenderReady'] = true;
  }

  toggleTheme() {
    this.document.querySelector('body').classList.toggle('dark');
  }

  logOut() {
    this.currentAccount.clear();
  }
}
