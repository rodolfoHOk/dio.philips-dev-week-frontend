import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaixaEtaria } from '../model/faixa-etaria';

@Injectable({
  providedIn: 'root',
})
export class FaixaEtariaService {
  constructor(private http: HttpClient) {}

  listFaixasEtaria(): Observable<FaixaEtaria[]> {
    const url = '/api/faixasetaria';
    return this.http.get<FaixaEtaria[]>(url);
  }
}
