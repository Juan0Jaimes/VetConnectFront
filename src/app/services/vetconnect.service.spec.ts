import { TestBed } from '@angular/core/testing';
import { VetConnectService } from './vetconnect.service';


describe('VetconnectService', () => {
  let service: VetConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
