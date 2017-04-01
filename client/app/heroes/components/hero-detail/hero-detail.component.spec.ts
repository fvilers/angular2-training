/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../models';
import { ActivatedRouteStub, RouterLinkStubDirective } from '../../../core';
import { HeroService } from '../../services';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {

    // stub Hero Service for test purposes
    let heroServiceStub = {
      getHero: function (name: string) { return Promise.resolve(new Hero()); }
    };

    // stub activated route
    let activatedRoute: ActivatedRouteStub = new ActivatedRouteStub();
    activatedRoute.testParams = { name: 'test' };

    TestBed.configureTestingModule({
      declarations: [
        HeroDetailComponent,
        RouterLinkStubDirective
      ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute },
        {provide: HeroService, useValue: heroServiceStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
