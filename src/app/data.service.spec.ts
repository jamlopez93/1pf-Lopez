import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('debe tener estudiantes', () => {
    expect(service.estudiantes.length).toBeGreaterThan(0);
  });

  it('Debe tener estudiantes con la estructura correcta', () => {
    const sampleStudent = service.estudiantes[0];
    expect(sampleStudent).toEqual(jasmine.objectContaining({
      nombre: jasmine.any(String),
      apellido: jasmine.any(String),
      email: jasmine.any(String),
      genero: jasmine.any(String),
      telefono: jasmine.any(String),
      matematica: jasmine.any(Number),
      ciencia: jasmine.any(Number),
      biologia: jasmine.any(Number),
    }));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


