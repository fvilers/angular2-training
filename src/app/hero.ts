export class Hero {
  name: String;
  title: String;
  universe: HeroUniverse;
  description: String;
  roles: HeroRole[];
  image: String;
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
