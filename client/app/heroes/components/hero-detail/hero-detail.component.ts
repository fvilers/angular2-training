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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.hero = this.route.snapshot.data['hero'];
  }
}
