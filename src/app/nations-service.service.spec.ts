import { TestBed } from '@angular/core/testing';

import { NationsServiceService } from './nations-service.service';

describe('NationsServiceService', () => {
  let service: NationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
