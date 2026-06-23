import { TestBed } from '@angular/core/testing';

import { ApiheroService } from './apihero.service';

describe('ApiheroService', () => {
  let service: ApiheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
