import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CurrentAccountService {
  private account = new Subject<string>();

  set(token: string) {
    localStorage.setItem('jwt', token);
    this.account.next(token);
  }

  get(): Observable<string> {
    return this.account
      .asObservable()
      .startWith(localStorage.getItem('jwt'))
    ;
  }

  clear() {
    this.set(null);
  }
}
