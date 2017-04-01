import { HeroRole } from './hero-role';
import { HeroUniverse } from './hero-universe';

export class Hero {
  updatedAt: Date;
  createdAt: Date;
  name: string;
  title: string;
  universe: HeroUniverse;
  image: string;
  description: string;
  roles: HeroRole[];
  id: string;
}
