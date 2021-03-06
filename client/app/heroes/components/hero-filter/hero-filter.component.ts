import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { HeroUniverse, HeroRole, HeroFilter } from '../../models';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.scss']
})
export class HeroFilterComponent implements OnInit {
  @Input() count = 0;
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
