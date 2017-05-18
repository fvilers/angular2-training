import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Account } from '../../models';
import { AccountService, CurrentAccountService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public account = new Account();
  public errorMessage: string;

  constructor(
    private service: AccountService,
    private currentAccount: CurrentAccountService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  login() {
    this.service
      .createToken(this.account.email, this.account.password)
      .then(token => {
        this.currentAccount.set(token);
        this.route.queryParams.subscribe(params => this.router.navigateByUrl(params['redirectUrl'] || '/'));
      })
      .catch(error => this.errorMessage = getErrorMessage(error.status))
    ;

    function getErrorMessage(status) {
      switch (status) {
        case 403:
          return 'This email or password is incorrect.';
        default:
          return `We're sorry, but an unexpected error occurred.`;
      }
    }
  }
}
