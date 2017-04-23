import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { HeroService } from '.';
import { Hero } from '../models';

@Injectable()
export class HeroResolverService implements Resolve<Hero> {
  constructor(private service: HeroService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Hero> {
    return this.service.getHero(route.params['name']);
  }
}
