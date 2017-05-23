/* tslint:disable:no-unused-variable */
import { MaterialModule } from '@angular/material';
import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ErrorSubject, RouterLinkStubDirective, RouterOutletStubComponent, RouterStub } from './core';
import { CurrentAccountService } from './accounts';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports: [MaterialModule],
      providers: [
        ErrorSubject,
        CurrentAccountService,
        { provide: Router, useValue: RouterStub }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'The Nexus'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('The Nexus');
  }));

});
