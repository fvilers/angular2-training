import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from '../../models';
import { AccountService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public account = new Account();
  public errorMessage: string;

  constructor(private service: AccountService, private router: Router) {
  }

  login() {
    this.service
      .createToken(this.account.email, this.account.password)
      .then(token => {
        localStorage.setItem('jwt', token);
        this.router.navigate(['/']);
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
