import { TestBed } from '@angular/core/testing';

import { CarDatailsService } from './car-datails.service';

describe('CarDatailsService', () => {
  let service: CarDatailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDatailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
