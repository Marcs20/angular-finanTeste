import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamento } from '../model/lancamento';
import { Receita } from '../model/receita';

@Injectable()
export class FinancaService {
  constructor(private http: HttpClient) {}

  url = 'https://aplica1.herokuapp.com/lancamento';

  lancamento: Lancamento[] = [];

  getLancamento() {
    return this.http.get<Lancamento[]>(this.url);
  }

  getID(id: number) {
    return this.http.get<Lancamento>(this.url + '/' + id);
  }

  update(lanca: Lancamento) {
    return this.http.put<Lancamento>(this.url + '/' + lanca.id, lanca);
  }

  add(lanca: Lancamento) {
    return this.http.post<Lancamento>(this.url, lanca);
  }

  delete(lanca: Lancamento) {
    return this.http.delete<Lancamento>(this.url + '/' + lanca.id);
  }

  url2 = 'https://aplica1.herokuapp.com/receita';

  lancamento2: Receita[] = [];

  getLancamento2() {
    return this.http.get<Receita[]>(this.url2);
  }

  getID2(id: number) {
    return this.http.get<Receita>(this.url2 + '/' + id);
  }

  update2(rece: Receita) {
    return this.http.put<Receita>(this.url2 + '/' + rece.id, rece);
  }

  add2(rece: Receita) {
    return this.http.post<Receita>(this.url2, rece);
  }

  delete2(rece: Receita) {
    return this.http.delete<Receita>(this.url2 + '/' + rece.id);
  }
}
