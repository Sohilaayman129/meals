import { TestBed } from '@angular/core/testing';

import { OutdataService } from './outdata.service';

describe('OutdataService', () => {
  let service: OutdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
