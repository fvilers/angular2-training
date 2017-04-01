import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from '../../services';
import { Hero } from '../../models';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService : HeroService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(params['name']))
      .subscribe(hero => this.hero = hero);
  }
}
