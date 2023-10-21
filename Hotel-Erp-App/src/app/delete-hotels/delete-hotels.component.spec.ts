import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHotelsComponent } from './delete-hotels.component';

describe('DeleteHotelsComponent', () => {
  let component: DeleteHotelsComponent;
  let fixture: ComponentFixture<DeleteHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteHotelsComponent]
    });
    fixture = TestBed.createComponent(DeleteHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
