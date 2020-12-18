import { TestBed } from '@angular/core/testing';

import { LoadPostsForProfileService } from './load-posts-for-profile.service';

describe('LoadPostsForProfileService', () => {
  let service: LoadPostsForProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPostsForProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
