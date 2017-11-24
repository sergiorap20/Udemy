import { TestBed, inject } from '@angular/core/testing';

import { InformacionServiceService } from './informacion-service.service';

describe('InformacionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacionServiceService]
    });
  });

  it('should be created', inject([InformacionServiceService], (service: InformacionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
