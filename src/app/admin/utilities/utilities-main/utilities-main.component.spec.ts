import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesMainComponent } from './utilities-main.component';

describe('UtilitiesMainComponent', () => {
  let component: UtilitiesMainComponent;
  let fixture: ComponentFixture<UtilitiesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
