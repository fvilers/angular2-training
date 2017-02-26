import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero, HeroUniverse, HeroRole } from './hero';

@Injectable()
export class HeroService {
  private url = 'assets/heroes.json';

  constructor(private http: Http) {
  }

  searchHeroes(universe: HeroUniverse, role: HeroRole): Observable<Hero[]> {
    return this.http
      .get(this.url)
      .map(response => {
        const heroes = response.json() as Hero[];
        return heroes.filter(hero =>
          (universe === undefined || hero.universe === universe)
          && (role === undefined || hero.roles.indexOf(role) !== -1)
        )
      })
  }
} 
