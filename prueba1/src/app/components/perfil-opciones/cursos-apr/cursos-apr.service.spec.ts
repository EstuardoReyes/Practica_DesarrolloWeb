import { TestBed } from '@angular/core/testing';

import { CursosAprService } from './cursos-apr.service';

describe('CursosAprService', () => {
  let service: CursosAprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosAprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
