import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Hero } from '../models';

@Injectable()
export class HeroResolverService implements Resolve<Hero> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Hero {
      const hero = new Hero();
      hero.name = 'Fabian';

      return hero;
    }
}
