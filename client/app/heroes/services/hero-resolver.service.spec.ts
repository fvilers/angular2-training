import { TestBed, inject } from '@angular/core/testing';

import { HeroResolverService } from './hero-resolver.service';

describe('HeroResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroResolverService]
    });
  });

  it('should ...', inject([HeroResolverService], (service: HeroResolverService) => {
    expect(service).toBeTruthy();
  }));
});
