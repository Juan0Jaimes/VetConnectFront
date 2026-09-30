import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureComponent } from './procedure.component';

describe('ProcedureComponent', () => {
  let component: ProcedureComponent;
  let fixture: ComponentFixture<ProcedureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcedureComponent]
    });
    fixture = TestBed.createComponent(ProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
