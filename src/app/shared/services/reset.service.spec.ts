import { TestBed } from '@angular/core/testing';

import { ResetService } from './reset.service';

describe('ResetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResetService = TestBed.get(ResetService);
    expect(service).toBeTruthy();
  });
});
