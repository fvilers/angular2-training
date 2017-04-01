import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { Hero } from '../../models';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;
  private snackBarDefaultConfig = new MdSnackBarConfig();

  constructor(private router: Router, private snackBar: MdSnackBar) {
    this.snackBarDefaultConfig.duration = 1500;
  }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate(['/heroes', this.hero.name]);
  }

  addToFavorites() {
    this.snackBar.open(`✔ ${this.hero.name} has been added to your favorite heroes`, null, this.snackBarDefaultConfig);
  }
}
