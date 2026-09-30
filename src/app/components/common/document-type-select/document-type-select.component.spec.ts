import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeSelectComponent } from './document-type-select.component';

describe('DocumentTypeSelectComponent', () => {
  let component: DocumentTypeSelectComponent;
  let fixture: ComponentFixture<DocumentTypeSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentTypeSelectComponent]
    });
    fixture = TestBed.createComponent(DocumentTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
