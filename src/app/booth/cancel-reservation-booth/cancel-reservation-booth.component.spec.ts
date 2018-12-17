import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelReservationBoothComponent } from './cancel-reservation-booth.component';

describe('CancelReservationBoothComponent', () => {
  let component: CancelReservationBoothComponent;
  let fixture: ComponentFixture<CancelReservationBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelReservationBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelReservationBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
