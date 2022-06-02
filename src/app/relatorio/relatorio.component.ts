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

  countD = 0;
  countR = 0;

  quantidadeDe() {
    for (let i = 0; i < this.despesa.length; i++) {
      this.countD = i + 1;
    }
    return this.countD;
  }
  getSumDe() {
    let n = 0;
    for (let i = 0; i < this.despesa.length; i++) {
      n = n + this.despesa[i].valor;
    }
    return n;
  }

  getSumRe() {
    let n = 0;
    for (let i = 0; i < this.receita.length; i++) {
      n = n + this.receita[i].valor;
    }
    return n;
  }

  quantidadeRe() {
    for (let i = 0; i < this.receita.length; i++) {
      this.countR = i + 1;
    }
    return this.countR;
  }

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
