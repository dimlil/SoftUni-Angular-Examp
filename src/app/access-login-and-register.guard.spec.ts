import { TestBed } from '@angular/core/testing';

import { AccessLoginAndRegisterGuard } from './access-login-and-register.guard';

describe('AccessLoginAndRegisterGuard', () => {
  let guard: AccessLoginAndRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessLoginAndRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
