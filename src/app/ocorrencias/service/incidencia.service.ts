import { Injectable } from '@angular/core';
import { Incidencia } from '../model/incidencia';

@Injectable({
  providedIn: 'root',
})
export class IncidenciaService {
  constructor() {}

  listIncidencias(): Incidencia[] {
    return [
      {
        id: 1,
        regiaoId: 1,
        mes: 5,
        faixaId: 2,
        qtdExames: 1,
      },
    ];
  }
}
