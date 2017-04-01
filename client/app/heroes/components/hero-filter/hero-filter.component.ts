import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HeroUniverse, HeroRole } from '../../models';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.scss']
})
export class HeroFilterComponent implements OnInit {
  @Output() changed = new EventEmitter<HeroFilter>();
  universes: number[];
  roles: number[];
  filter: HeroFilter = new HeroFilter();

  constructor() { }

  ngOnInit() {
    this.universes = Object
      .keys(HeroUniverse)
      .map(key => HeroUniverse[key])
      .filter(v => typeof v === 'number') as number[];

    this.roles = Object
      .keys(HeroRole)
      .map(key => HeroRole[key])
      .filter(v => typeof v === 'number') as number[];
  }

  notifyChange () {
    this.changed.emit(this.filter);
  }
}

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
