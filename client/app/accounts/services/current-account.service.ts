import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrentAccountService {
  public redirectUrl = '/';
  private account = new BehaviorSubject<string>(localStorage.getItem('jwt'));

  set(token: string) {
    if (token) {
      localStorage.setItem('jwt', token);
    } else {
      localStorage.removeItem('jwt');
    }
    this.account.next(token);
  }

  get(): Observable<string> {
    return this.account.asObservable();
  }

  getSnapShot(): string {
    return this.account.getValue();
  }

  clear() {
    this.set(null);
  }
}
