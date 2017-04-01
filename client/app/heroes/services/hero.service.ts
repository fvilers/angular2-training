import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

import { Hero, HeroUniverse, HeroRole } from '../models';

@Injectable()
export class HeroService {
  private url = `${environment.backend.url}/heroes`;

  constructor(private http: Http) {
  }

  searchHeroes(universe: HeroUniverse, role: HeroRole, terms: string): Observable<Hero[]> {
    const query = this.querystring({ universe, role, terms });
    return this.http
      .get(`${this.url}?${query}`)
      .map(response => response.json() as Hero[]);
  }

  getHero(name: string): Promise<Hero> {
    return this.http.get(`${this.url}/${name}`)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  private querystring(query) {
    return Object
      .keys(query)
      .filter(key => query[key] || query[key] === 0 || query[key] === false)
      .map(key => encodeURI(key) + '=' + encodeURI(query[key]))
      .join('&');
  }

  private handleError(error: any): Promise<any> {
    // TODO: add real error handling
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
