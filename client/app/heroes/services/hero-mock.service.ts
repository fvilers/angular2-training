import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HeroService } from './hero.service';
import { Hero, HeroUniverse, HeroRole } from '../models';

@Injectable()
export class HeroServiceMock extends HeroService {

  private datUrl = 'assets/heroes.json';

  constructor(private httpClient: Http) {
    super(httpClient);
  }

  searchHeroes(universe: HeroUniverse, role: HeroRole, terms: string): Observable<Hero[]> {
    const regexp = new RegExp(terms, 'i');

    return this.httpClient
      .get(this.datUrl)
      .map(response => {
        const heroes = response.json() as Hero[];

        return heroes
          .filter(hero =>
            (universe === undefined || hero.universe === universe)
            && (role === undefined || hero.roles.indexOf(role) !== -1)
            && (!terms || hero.name.match(regexp) || hero.title.match(regexp))
          )
          .sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
      });
  }

  getHero(name: string): Promise<Hero> {
    return this.httpClient.get(this.datUrl)
      .toPromise()
      .then(response => response.json() as Hero[])
      .then(heroes => heroes.filter(hero => hero.name === name).pop());
  }
}
