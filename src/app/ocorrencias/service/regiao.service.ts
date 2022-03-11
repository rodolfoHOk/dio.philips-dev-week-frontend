import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root',
})
export class RegiaoService {
  constructor() {}

  listRegioes(): Regiao[] {
    return [
      {
        id: 1,
        regiao: 'Norte',
        qtdExames: 1564,
      },
    ];
  }
}
