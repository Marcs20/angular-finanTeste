import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Cotacao } from '../model/cotacao';

@Injectable()
export class CotacaoService {
  constructor(private http: HttpClient) {
    setInterval(() => {
      this.updatePrice();
    }, 10000);
  }

  results: any;

  coin: Array<Cotacao> = [];

  getUSD() {
    let len = this.coin.length;
    return this.coin[len].USD.high;
  }

  getPrices() {
    return this.http
      .get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
      .pipe(map((data) => (this.results = data)));
  }

  updatePrice() {
    this.http
      .get<Cotacao>(
        'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
      )
      .subscribe((data) => {
        this.coin.push(data);
      });
  }
}
