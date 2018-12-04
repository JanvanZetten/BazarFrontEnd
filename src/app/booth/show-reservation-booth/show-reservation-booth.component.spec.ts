import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReservationBoothComponent } from './show-reservation-booth.component';

describe('ShowReservationBoothComponent', () => {
  let component: ShowReservationBoothComponent;
  let fixture: ComponentFixture<ShowReservationBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReservationBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReservationBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
