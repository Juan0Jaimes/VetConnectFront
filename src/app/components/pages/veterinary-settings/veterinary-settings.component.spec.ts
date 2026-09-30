import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarySettingsComponent } from './veterinary-settings.component';

describe('VeterinarySettingsComponent', () => {
  let component: VeterinarySettingsComponent;
  let fixture: ComponentFixture<VeterinarySettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarySettingsComponent]
    });
    fixture = TestBed.createComponent(VeterinarySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
