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

export enum HeroRole {
  Assassin,
  Warrior,
  Support,
  Specialist
}

export enum HeroUniverse {
  Warcraft,
  Starcraft,
  Diablo,
  Retro,
  Overwatch
}
