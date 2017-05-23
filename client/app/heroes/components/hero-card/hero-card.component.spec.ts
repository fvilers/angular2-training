/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { RouterStub } from '../../../core';
import { Hero } from '../../models';
import { HeroRolePipe, HeroUniversePipe } from '../../pipes';
import { HeroCardComponent } from './hero-card.component';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroCardComponent,
        HeroRolePipe,
        HeroUniversePipe
      ],
      imports: [MaterialModule],
      providers: [{ provide: Router, useValue: RouterStub } ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    component.hero = new Hero();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
