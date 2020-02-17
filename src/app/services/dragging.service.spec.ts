import { TestBed } from '@angular/core/testing';

import { DraggingService } from './dragging.service';

describe('DraggingService', () => {
  let service: DraggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
