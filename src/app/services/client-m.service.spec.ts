import { TestBed } from '@angular/core/testing';

import { ClientMService } from './client-m.service';

describe('ClientMService', () => {
  let service: ClientMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
