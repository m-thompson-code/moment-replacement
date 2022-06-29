import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  beforeEach(() => {
    jasmine.clock().mockDate(new Date(1990, 8, 1));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTomorrowData()', () => {
    it('get tomorrow\'s date', () => {
      expect(service.getTomorrowData()).toBe('1990-09-02');
    });
  });
});
