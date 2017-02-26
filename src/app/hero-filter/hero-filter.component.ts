import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HeroUniverse, HeroRole } from '../hero';

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
      .filter(v => typeof v === "number") as number[]

    this.roles = Object
      .keys(HeroRole)
      .map(key => HeroRole[key])
      .filter(v => typeof v === "number") as number[]
  }

  notifyChange () {
    this.changed.emit(this.filter);
  }
}

export class HeroFilter {
  universe: HeroUniverse;
  role: HeroRole;
  terms: string;
}
