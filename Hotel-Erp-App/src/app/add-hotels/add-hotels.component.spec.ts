import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHotelsComponent } from './add-hotels.component';

describe('AddHotelsComponent', () => {
  let component: AddHotelsComponent;
  let fixture: ComponentFixture<AddHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHotelsComponent]
    });
    fixture = TestBed.createComponent(AddHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
