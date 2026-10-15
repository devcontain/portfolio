import { TestBed } from '@angular/core/testing';

import { TwoGithubService } from './two-github.service';

describe('TwoGithubService', () => {
  let service: TwoGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwoGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
