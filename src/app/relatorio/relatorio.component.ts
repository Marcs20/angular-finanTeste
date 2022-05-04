import { Component, OnInit } from '@angular/core';
import { Lancamento } from '../model/lancamento';
import { Receita } from '../model/receita';
import { FinancaService } from '../service/financa.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
})
export class RelatorioComponent implements OnInit {
  constructor(private service: FinancaService) {}

  despesa: Lancamento[] = [];
  receita: Receita[] = [];

  getMax() {
    return Math.max.apply(
      Math,
      this.despesa.map(function (o) {
        return o.valor;
      })
    );
  }

  getMin() {
    return Math.min.apply(
      Math,
      this.despesa.map(function (o) {
        return o.valor;
      })
    );
  }

  getMax2() {
    return Math.max.apply(
      Math,
      this.receita.map(function (o) {
        return o.valor;
      })
    );
  }

  getMin2() {
    return Math.min.apply(
      Math,
      this.receita.map(function (o) {
        return o.valor;
      })
    );
  }

  ngOnInit() {
    this.service.getLancamento().subscribe((data) => (this.despesa = data));
    this.service.getLancamento2().subscribe((data) => (this.receita = data));
  }
}
