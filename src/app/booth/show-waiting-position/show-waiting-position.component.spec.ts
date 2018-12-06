import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWaitingPositionComponent } from './show-waiting-position.component';

describe('ShowWaitingPositionComponent', () => {
  let component: ShowWaitingPositionComponent;
  let fixture: ComponentFixture<ShowWaitingPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWaitingPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWaitingPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
