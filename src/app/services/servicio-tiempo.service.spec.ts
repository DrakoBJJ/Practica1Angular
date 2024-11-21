import { TestBed } from '@angular/core/testing';

import { ServicioTiempoService } from './servicio-tiempo.service';

describe('ServicioTiempoService', () => {
  let service: ServicioTiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
