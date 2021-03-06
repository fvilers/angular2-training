import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from '../../models';
import { AccountService, CurrentAccountService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public account = new Account();
  public errorMessage: string;

  constructor(
    private service: AccountService,
    private currentAccount: CurrentAccountService,
    private router: Router) {
  }

  register() {
    this.service
      .register(this.account.email, this.account.password)
      .then(() => this.service.createToken(this.account.email, this.account.password))
      .then(token => {
        this.currentAccount.set(token);
        this.router.navigate(['/']);
      })
      .catch(error => this.errorMessage = getErrorMessage(error.status))
    ;

    function getErrorMessage(status) {
      switch (status) {
        case 409:
          return 'This account already exists.';
        default:
          return `We're sorry, but an unexpected error occurred.`;
      }
    }
  }
}
