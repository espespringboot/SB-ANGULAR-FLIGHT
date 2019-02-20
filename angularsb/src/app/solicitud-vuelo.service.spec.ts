import { TestBed } from '@angular/core/testing';

import { SolicitudVueloService } from './solicitud-vuelo.service';

describe('SolicitudVueloService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[SolicitudVueloService]
  }));

  it('should be created', () => {
    const service: SolicitudVueloService = TestBed.get(SolicitudVueloService);
    expect(service).toBeTruthy();
  });
});
