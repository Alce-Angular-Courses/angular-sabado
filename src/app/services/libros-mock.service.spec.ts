import { TestBed } from '@angular/core/testing';

import { LibrosMockService } from './libros-mock.service';

describe('LibrosMockService', () => {
  let service: LibrosMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
