import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroService } from '../../services';
import { WindowService } from '../../../core';
import { Hero, HeroFilter } from '../../models';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, AfterViewInit {
  heroes: Observable<Hero[]>;
  count = 0;
  canMoveToTop = false;
  private filter = new Subject<HeroFilter>();

  constructor(private heroService: HeroService, private windowService: WindowService) {
  }

  @HostListener('window:scroll', ['$event'])
  trackPosition(event) {
    this.canMoveToTop =  document.body.scrollTop > 0;
  }

  ngOnInit() {
    this.heroes = this.filter
      .debounceTime(300)
      .distinctUntilChanged(HeroFilter.compare)
      .switchMap(filter => filter
        ? this.heroService.searchHeroes(filter.universe, filter.role, filter.terms)
        : Observable.of<Hero[]>([]));
    this.heroes.subscribe(heroes => this.count = heroes ? heroes.length : 0);
  }

  ngAfterViewInit() {
    this.filterHeroes(new HeroFilter());
  }

  filterHeroes (filter: HeroFilter) {
    this.filter.next(filter);
  }

  moveToTop() {
    this.windowService.scrollTo(0, 0);
  }
}
