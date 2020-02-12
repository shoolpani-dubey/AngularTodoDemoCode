import { TestBed } from '@angular/core/testing';

import { LocalStorageProviderService } from './local-storage-provider.service';

describe('LocalStorageProviderService', () => {
  let service: LocalStorageProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
