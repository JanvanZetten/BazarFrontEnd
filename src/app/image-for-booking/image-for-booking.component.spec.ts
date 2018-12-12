import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageForBookingComponent } from './image-for-booking.component';

describe('ImageForBookingComponent', () => {
  let component: ImageForBookingComponent;
  let fixture: ComponentFixture<ImageForBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageForBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageForBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
