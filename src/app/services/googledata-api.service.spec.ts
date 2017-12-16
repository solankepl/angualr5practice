import { TestBed, inject } from '@angular/core/testing';

import { GoogledataApiService } from './googledata-api.service';

describe('GoogledataApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogledataApiService]
    });
  });

  it('should be created', inject([GoogledataApiService], (service: GoogledataApiService) => {
    expect(service).toBeTruthy();
  }));
});
