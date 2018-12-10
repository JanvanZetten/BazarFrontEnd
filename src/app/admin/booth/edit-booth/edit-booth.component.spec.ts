import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoothComponent } from './edit-booth.component';

describe('EditBoothComponent', () => {
  let component: EditBoothComponent;
  let fixture: ComponentFixture<EditBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
