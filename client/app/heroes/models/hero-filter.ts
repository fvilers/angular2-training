import { HeroRole } from './hero-role';
import { HeroUniverse } from './hero-universe';

export class HeroFilter {
  universe: HeroUniverse;
  role: HeroRole;
  terms: string;

  static compare(x: HeroFilter, y: HeroFilter) {
    return x.universe !== y.universe
      && x.role !== y.role
      && x.terms !== y.terms;
  }
}
