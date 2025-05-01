import { TestBed } from '@angular/core/testing';

import { CreateRoutineService } from './create-routine.service';

describe('CreateRoutineService', () => {
  let service: CreateRoutineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRoutineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
