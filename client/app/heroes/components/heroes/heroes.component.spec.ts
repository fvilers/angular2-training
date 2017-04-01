/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../../models';
import { HeroService } from '../../services';
import { WindowService } from '../../../core';
import { HeroRolePipe, HeroUniversePipe } from '../../pipes';
import { HeroFilterComponent } from '../hero-filter';
import { HeroCardComponent } from '../hero-card';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {

    // stub Hero Service for test purposes
    let heroServiceStub = {
      searchHeroes: function (p1: any, p2: any, p3: any) {
        return new Observable<Hero[]>(); }
    };

    TestBed.configureTestingModule({
      declarations: [
        HeroCardComponent,
        HeroesComponent,
        HeroFilterComponent,
        HeroRolePipe,
        HeroUniversePipe
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
      providers: [
        WindowService,
        { provide: HeroService, useValue: heroServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
