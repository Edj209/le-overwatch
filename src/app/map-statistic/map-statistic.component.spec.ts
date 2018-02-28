import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { MapStatisticComponent } from './map-statistic.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OwHeroService } from '../ow-hero.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

class MockOwHeroService extends OwHeroService {
  getFakeJson() {
    return 'fake json';
  }
}


describe('MapStatisticComponent', () => {
  let component: MapStatisticComponent;
  let fixture: ComponentFixture<MapStatisticComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule],
      declarations: [ MapStatisticComponent],
      providers: [{
        provide: OwHeroService, 
        useClass: MockOwHeroService
      }, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
