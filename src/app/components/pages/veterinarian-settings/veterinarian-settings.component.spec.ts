import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianSettingsComponent } from './veterinarian-settings.component';

describe('VeterinarianSettingsComponent', () => {
  let component: VeterinarianSettingsComponent;
  let fixture: ComponentFixture<VeterinarianSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarianSettingsComponent]
    });
    fixture = TestBed.createComponent(VeterinarianSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
