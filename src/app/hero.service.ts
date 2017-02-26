import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Hero, HeroUniverse, HeroRole } from './hero';

@Injectable()
export class HeroService {
  private url = 'assets/heroes.json';

  constructor(private http: Http) {
  }

  searchHeroes(universe: HeroUniverse, role: HeroRole, terms: string): Observable<Hero[]> {
    const regexp = new RegExp(terms, 'i');

    return this.http
      .get(this.url)
      .map(response => {
        const heroes = response.json() as Hero[];
        return heroes.filter(hero =>
          (universe === undefined || hero.universe === universe)
          && (role === undefined || hero.roles.indexOf(role) !== -1)
          && (!terms || hero.name.match(regexp) || hero.title.match(regexp))
        )
      });
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
