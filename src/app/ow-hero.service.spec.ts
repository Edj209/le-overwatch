import { TestBed, inject } from '@angular/core/testing';

import { OwHeroService } from './ow-hero.service';

describe('OwHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwHeroService]
    });
  });

  it('should be created', inject([OwHeroService], (service: OwHeroService) => {
    expect(service).toBeTruthy();
  }));
});
