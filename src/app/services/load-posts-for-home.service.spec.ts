import { TestBed } from '@angular/core/testing';

import { LoadPostsForHomeService } from './load-posts-for-home.service';

describe('LoadPostsForHomeService', () => {
  let service: LoadPostsForHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPostsForHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
