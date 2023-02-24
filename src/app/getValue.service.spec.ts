/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetValueService } from './getValue.service';

describe('Service: GetValue', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetValueService]
    });
  });

  it('should ...', inject([GetValueService], (service: GetValueService) => {
    expect(service).toBeTruthy();
  }));
});
