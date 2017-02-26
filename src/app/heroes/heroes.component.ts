import { Component, OnInit } from '@angular/core';

import { HeroFilter } from '../hero-filter/hero-filter.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes(); 
  }

  getHeroes(): Promise<Hero[]> {
    return this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  filterHeroes (filter: HeroFilter) {
    console.log("filter", filter);
  }
}
