import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { HeroResolverService } from './hero-resolver.service';
import { HeroService } from './hero.service';

describe('HeroResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        HeroService,
        HeroResolverService
      ]
    });
  });

  it('should ...', inject([HeroResolverService], (service: HeroResolverService) => {
    expect(service).toBeTruthy();
  }));
});
