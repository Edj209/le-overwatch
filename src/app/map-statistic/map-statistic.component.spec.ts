import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MapStatisticComponent } from './map-statistic.component';
import { OwHeroService } from '../ow-hero.service';


describe('ChooseMapStatisticComponent', () => {
  let component: MapStatisticComponent;
  let fixture: ComponentFixture<MapStatisticComponent>;
  let service: OwHeroService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ MapStatisticComponent ],
      providers: [{ provide: ActivatedRoute, useValue: { params: Observable.of({ path: 'map-statistic/hanamura' }) } }, 
      Location, OwHeroService, HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(OwHeroService);

    fixture = TestBed.createComponent(MapStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
