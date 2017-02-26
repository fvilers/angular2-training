import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private url = 'assets/heroes.json';

  constructor(private http: Http) {
  }

  getHeroes() {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);

    return Promise.reject(error.message || error);
  }
} 
