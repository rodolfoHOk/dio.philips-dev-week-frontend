import { Injectable } from '@angular/core';
import { FaixaEtaria } from '../model/faixa-etaria';

@Injectable({
  providedIn: 'root',
})
export class FaixaEtariaService {
  constructor() {}

  listFaixasEtaria(): FaixaEtaria[] {
    return [
      {
        id: 1,
        faixaI: 0,
        faixaN: 10,
        descricao: 'Até 10 anos',
      },
      {
        id: 2,
        faixaI: 11,
        faixaN: 14,
        descricao: 'Entre 11 e 14 anos',
      },
    ];
  }
}
