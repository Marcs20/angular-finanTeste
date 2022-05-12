import { Component, OnInit } from '@angular/core';
import { CotacaoService } from '../service/cotacao.service';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css'],
})
export class CotacaoComponent implements OnInit {

  objectKeys = Object.keys;
  cryptos: any;

  constructor(private coin: CotacaoService) {}

  ngOnInit() {
    this.coin.getPrices().subscribe((res) => {
      this.cryptos = res;
      console.log(res);
    });
  }
}
