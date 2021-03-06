import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../../model/lancamento';
import { Receita } from '../../model/receita';

import { FinancaService } from '../../service/financa.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
})
export class MostrarComponent implements OnInit {
  constructor(
    public service: FinancaService,
    private router: Router,
    private http: HttpClient
  ) {}

  lancamento: Lancamento[] = [];

  delete(lanca: Lancamento) {
    this.service.delete(lanca).subscribe((data) => {
      this.lancamento = this.lancamento.filter((l) => l !== lanca);
      alert('deletado!');
    });
  }

  count = 0;

  quantidade() {
    for (let i = 0; i < this.lancamento.length; i++) {
      this.count = i +1
    }
    return this.count;
  }

  getSum() {
    let n = 0;
    for (let i = 0; i < this.lancamento.length; i++) {
      n = n + this.lancamento[i].valor;
    }
    return n;
  }

  update(lanca: Lancamento) {
    localStorage.setItem('id', lanca.id.toString());
    this.router.navigate(['editar']);
  }

  ngOnInit() {
    this.service.getLancamento().subscribe((data) => (this.lancamento = data));
  }
}
