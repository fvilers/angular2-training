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
    return this.http
      .get(`${this.url}?terms=${encodeURI(terms || '')}`)
      .map(response => response.json().data as Hero[]);
  }

  getHero(name: string): Promise<Hero> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Hero[])
      .then(heroes => heroes.filter(hero => hero.name === name).pop())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // TODO: add real error handling
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
