import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComparisonModule } from 'angular-comparison';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { RouterStub } from '../../../core';
import { MaterialModule } from '@angular/material';

import { RegisterComponent } from './register.component';
import { AccountService, CurrentAccountService } from '../../services';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        BrowserAnimationsModule,
        ComparisonModule,
        FormsModule,
        HttpModule,
        MaterialModule
      ],
      providers: [
        AccountService,
        CurrentAccountService,
        { provide: Router, useValue: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
