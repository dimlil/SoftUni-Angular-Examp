import { TestBed } from '@angular/core/testing';

import { IsUserLoggedService } from './is-user-logged.service';

describe('IsUserLoggedService', () => {
  let service: IsUserLoggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsUserLoggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
