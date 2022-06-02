import { TestBed } from '@angular/core/testing';

import { GeopackageService } from './geopackage.service';

describe('GeopackageService', () => {
  let service: GeopackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeopackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
