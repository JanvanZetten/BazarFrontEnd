import { TestBed } from '@angular/core/testing';

import { BoothService } from './booth.service';

describe('BoothService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoothService = TestBed.get(BoothService);
    expect(service).toBeTruthy();
  });
});
