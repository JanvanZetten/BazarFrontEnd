import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBoothComponent } from './book-booth.component';

describe('BookBoothComponent', () => {
  let component: BookBoothComponent;
  let fixture: ComponentFixture<BookBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
