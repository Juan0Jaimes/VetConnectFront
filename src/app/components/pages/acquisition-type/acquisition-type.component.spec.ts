import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisitionTypeComponent } from './acquisition-type.component';

describe('AcquisitionTypeComponent', () => {
  let component: AcquisitionTypeComponent;
  let fixture: ComponentFixture<AcquisitionTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcquisitionTypeComponent]
    });
    fixture = TestBed.createComponent(AcquisitionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
