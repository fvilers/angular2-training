/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { HeroRolePipe, HeroUniversePipe } from '../../pipes';
import { HeroFilterComponent } from './hero-filter.component';

describe('HeroFilterComponent', () => {
  let component: HeroFilterComponent;
  let fixture: ComponentFixture<HeroFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroFilterComponent,
        HeroRolePipe,
        HeroUniversePipe
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
