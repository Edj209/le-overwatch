import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMapStatisticComponent } from './choose-map-statistic.component';

describe('ChooseMapStatisticComponent', () => {
  let component: ChooseMapStatisticComponent;
  let fixture: ComponentFixture<ChooseMapStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseMapStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMapStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
