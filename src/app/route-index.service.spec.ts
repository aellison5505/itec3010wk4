import { TestBed, inject } from '@angular/core/testing';

import { RouteIndexService } from './route-index.service';

describe('RouteIndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteIndexService]
    });
  });

  it('should ...', inject([RouteIndexService], (service: RouteIndexService) => {
    expect(service).toBeTruthy();
  }));
});
