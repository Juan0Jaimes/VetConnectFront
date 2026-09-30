import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresServicesSettingsComponent } from './procedures-services-settings.component';

describe('ProceduresServicesSettingsComponent', () => {
  let component: ProceduresServicesSettingsComponent;
  let fixture: ComponentFixture<ProceduresServicesSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProceduresServicesSettingsComponent]
    });
    fixture = TestBed.createComponent(ProceduresServicesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
