import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToDetail () {
    this.router.navigate(['/heroes', this.hero.name]);
  }
}
