import { TestBed, inject } from '@angular/core/testing';

import { OwHeroService } from './ow-hero.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { asyncData } from './testing/async-observable-helpers';


describe('OwHeroService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let owHeroService: OwHeroService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    owHeroService = new OwHeroService(<any> httpClientSpy);

    TestBed.configureTestingModule({
      providers: [OwHeroService, HttpClient],
      imports: [HttpClientTestingModule, HttpClientModule]
    });
  });

  it('should be created', inject([OwHeroService], (service: OwHeroService) => {
    expect(service).toBeTruthy();
  }));

  it('should return fake json', () => {
    const expectedJson = '{"name": "Test 76", "wr": ".36"}';

    httpClientSpy.get.and.returnValue(asyncData(expectedJson));

    owHeroService.getJson().subscribe(
      jsonobj => expect(jsonobj).toEqual(expectedJson, 'expected json'), 
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  });
});
