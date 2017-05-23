import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CurrentAccountService {
  private account = new Subject<string>();

  set(token: string) {
    if (token) {
      localStorage.setItem('jwt', token);
    } else {
      localStorage.removeItem('jwt');
    }
    this.account.next(token);
  }

  get(): Observable<string> {
    return this.account
      .asObservable()
      .startWith(localStorage.getItem('jwt'));
  }

  clear() {
    localStorage.removeItem('jwt');
    this.account.next(null);
  }
}
