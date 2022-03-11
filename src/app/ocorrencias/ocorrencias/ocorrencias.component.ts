import { Component, OnInit } from '@angular/core';
import { FaixaEtaria } from '../model/faixa-etaria';
import { Incidencia } from '../model/incidencia';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixa-etaria.service';
import { IncidenciaService } from '../service/incidencia.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css'],
})
export class OcorrenciasComponent implements OnInit {
  regioes: Regiao[] = [];
  faixasEtarias: FaixaEtaria[] = [];
  incidencias: Incidencia[] = [];

  constructor(
    private regiaoService: RegiaoService,
    private faixaEtariaService: FaixaEtariaService,
    private incidenciaService: IncidenciaService
  ) {}

  ngOnInit(): void {
    this.regioes = this.regiaoService.listRegioes();
    this.faixasEtarias = this.faixaEtariaService.listFaixasEtaria();
    this.incidencias = this.incidenciaService.listIncidencias();
  }
}
