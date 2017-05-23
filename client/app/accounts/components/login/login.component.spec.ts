import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';

import { RouterStub } from '../../../core';
import { AccountService, CurrentAccountService } from '../../services';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // Stubs
  const accountServiceStub = {
    register: (email: string, password: string) => Promise.resolve(),
    createToken: (email: string, password: string) => Promise.resolve('')
  };
  const currentAccountServiceStub = {
    set: () => {},
    get: () => Observable.of(''),
    clear: () => {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RouterTestingModule,
        MaterialModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: new ActivatedRoute() },
        { provide: AccountService, useValue: accountServiceStub },
        { provide: CurrentAccountService, useValue: currentAccountServiceStub },
        { provide: Router, useValue: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
