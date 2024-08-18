import { TestBed } from '@angular/core/testing';

import { MealsfishhhService } from './mealsfishhh.service';

describe('MealsfishhhService', () => {
  let service: MealsfishhhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsfishhhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
