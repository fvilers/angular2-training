import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { CurrentAccountService } from './current-account.service';

@Injectable()
export class AccountGuardService implements CanActivate {

  constructor(
    private currentAccountService: CurrentAccountService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): Observable<boolean> {
    return this.currentAccountService.get().map((account: string) => {
      if (!account) {
        this.router.navigate(['accounts', 'login'], { queryParams: { redirectUrl: url } });
        return false;
      }
      return true;
    });
  }
}
