import { TestBed, inject } from '@angular/core/testing';

import { InformationServiceService } from './information-service.service';

describe('InformationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformationServiceService]
    });
  });

  it('should be created', inject([InformationServiceService], (service: InformationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
