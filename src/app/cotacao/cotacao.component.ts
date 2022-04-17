import { Component, OnInit } from '@angular/core';
import { CotacaoService } from '../service/cotacao.service';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css'],
})
export class CotacaoComponent implements OnInit {
  constructor(public coin: CotacaoService) {}

  ngOnInit() {}
}
