import { TestBed } from '@angular/core/testing';

import { AuthStateResolver } from './auth-state.resolver';

describe('AuthStateResolver', () => {
  let resolver: AuthStateResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AuthStateResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
