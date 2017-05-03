import { Injectable } from '@angular/core';

@Injectable()
export class CurrentAccountService {
  set(token: string) {
    localStorage.setItem('jwt', token);
  }
}
