/* tslint:disable:no-unused-variable */
import { HttpModule } from '@angular/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HeroService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
