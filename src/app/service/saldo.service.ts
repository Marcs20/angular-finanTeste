import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamento } from '../model/lancamento';

@Injectable()
export class SaldoService {
  constructor(private http: HttpClient) {}

  dataList: Array<Lancamento> = [];
  dataList2: Array<Lancamento> = [];

  getDesp() {
    this.http
      .get<Lancamento>('https://aplica1.herokuapp.com/lancamento')
      .subscribe((data) => this.dataList.push(data));
  }

  getRece() {
    this.http
      .get<Lancamento>('https://aplica1.herokuapp.com/receita')
      .subscribe((data) => this.dataList2.push(data));
  }

  saldo: number = 0;
}
