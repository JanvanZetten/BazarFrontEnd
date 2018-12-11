import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothDeleteComponent } from './booth-delete.component';

describe('BoothDeleteComponent', () => {
  let component: BoothDeleteComponent;
  let fixture: ComponentFixture<BoothDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoothDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoothDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
