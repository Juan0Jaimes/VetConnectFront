import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInfoComponent } from './pet-info.component';

describe('PetInfoComponent', () => {
  let component: PetInfoComponent;
  let fixture: ComponentFixture<PetInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetInfoComponent]
    });
    fixture = TestBed.createComponent(PetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
