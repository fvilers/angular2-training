export class Hero {
  name: string;
  title: string;
  universe: HeroUniverse;
  description: string;
  roles: HeroRole[];
  image: string;
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
