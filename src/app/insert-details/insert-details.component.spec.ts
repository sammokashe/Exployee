import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDetailsComponent } from './insert-details.component';

describe('InsertDetailsComponent', () => {
  let component: InsertDetailsComponent;
  let fixture: ComponentFixture<InsertDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
