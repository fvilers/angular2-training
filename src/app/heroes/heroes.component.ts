import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
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
  canMoveToTop = false;
  private filter = new Subject<HeroFilter>();

  constructor(private heroService: HeroService) {
  }

  @HostListener('window:scroll', ['$event']) 
    trackPosition(event) {
      this.canMoveToTop =  document.body.scrollTop > 0;
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

  moveToTop() {
    // TODO: inject as a service
    window.scrollTo(0, 0);
  }
}
