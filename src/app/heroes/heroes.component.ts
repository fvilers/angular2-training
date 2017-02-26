import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { HeroFilter } from '../hero-filter/hero-filter.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, AfterViewInit {
  heroes: Observable<Hero[]>;
  private filter = new Subject<HeroFilter>();

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes = this.filter
      .switchMap(filter => filter
        ? this.heroService.searchHeroes(filter.universe, filter.role, filter.terms)
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  ngAfterViewInit() {
    this.filterHeroes(new HeroFilter());
  }

  filterHeroes (filter: HeroFilter) {
    this.filter.next(filter);
  }
}
