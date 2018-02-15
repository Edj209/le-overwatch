import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStatisticComponent } from './map-statistic.component';

describe('MapStatisticComponent', () => {
  let component: MapStatisticComponent;
  let fixture: ComponentFixture<MapStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapStatisticComponent ]
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
