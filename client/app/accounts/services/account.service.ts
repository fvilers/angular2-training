import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class AccountService {
  private url = `${environment.backend.url}/accounts`;

  constructor(private http: Http) {
  }

  register(email: string, password: string): Promise<void> {
    const data = { email, password };

    return this.http
      .post(this.url, data)
      .toPromise()
      .then(response => {});
  }

  createToken(email: string, password: string): Promise<string> {
    const data = { email, password };

    return this.http
      .post(`${this.url}/token`, data)
      .toPromise()
      .then(response => response.json().access_token);
  }
}
