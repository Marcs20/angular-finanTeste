import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../../model/lancamento';

import { FinancaService } from '../../service/financa.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
})
export class MostrarComponent implements OnInit {
  constructor(public service: FinancaService, private router: Router, private http: HttpClient) {}

  lancamento: Lancamento[] = [];

  delete(lanca: Lancamento) {
    this.service.delete(lanca).subscribe((data) => {
      this.lancamento = this.lancamento.filter((l) => l !== lanca);
      alert('deletado!');
    });
  }

  update(lanca: Lancamento) {
    localStorage.setItem('id', lanca.id.toString());
    this.router.navigate(['editar']);
  }

  dataL: Array<Lancamento> = [];
  dataR: Array<Lancamento> = [];

  getDesp() {
    this.http
      .get<Lancamento>('https://aplica1.herokuapp.com/lancamento')
      .subscribe((data) => this.dataL.push(data));
  }

  getValueL() {
    return this.saldo = this.dataL[length].valor + this.dataR[length].valor;
  }

  getRece() {
    this.http
      .get<Lancamento>('https://aplica1.herokuapp.com/receita')
      .subscribe((data) => this.dataR.push(data));
  }

  saldo: number = 0;

  ngOnInit() {
    this.service.getLancamento().subscribe((data) => (this.lancamento = data));
  }
}
