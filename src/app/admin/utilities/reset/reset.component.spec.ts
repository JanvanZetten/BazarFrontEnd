import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartComponent } from './reset.component';

describe('RestartComponent', () => {
  let component: RestartComponent;
  let fixture: ComponentFixture<RestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
