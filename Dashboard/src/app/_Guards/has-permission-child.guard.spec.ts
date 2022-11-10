import { TestBed } from '@angular/core/testing';

import { HasPermissionChildGuard } from './has-permission-child.guard';

describe('HasPermissionChildGuard', () => {
  let guard: HasPermissionChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasPermissionChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
