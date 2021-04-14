import { TestBed } from '@angular/core/testing';

import { RegUsersService } from './reg-users.service';

describe('RegUsersService', () => {
  let service: RegUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
