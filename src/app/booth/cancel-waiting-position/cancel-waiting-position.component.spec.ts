import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelWaitingPositionComponent } from './cancel-waiting-position.component';

describe('CancelWaitingPositionComponent', () => {
  let component: CancelWaitingPositionComponent;
  let fixture: ComponentFixture<CancelWaitingPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelWaitingPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelWaitingPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
