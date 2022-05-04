import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarComponent } from '../despesa/mostrar/mostrar.component';

import { Lancamento } from '../model/lancamento';
import { Receita } from '../model/receita';
import { MostrarreceitaComponent } from '../receita/mostrarreceita/mostrarreceita.component';
import { FinancaService } from '../service/financa.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private service: FinancaService) {}

  despesa: Lancamento[] = [];
  receita: Receita[] = [];

  getDesp() {
    let n = 0;
    for (let i = 0; i < this.despesa.length; i++) {
      n = n + this.despesa[i].valor;
    }
    return n;
  }

  getRece() {
    let n = 0;
    for (let i = 0; i < this.receita.length; i++) {
      n = n + this.receita[i].valor;
    }
    return n;
  }

  

  ngOnInit() {
    this.service.getLancamento().subscribe((data) => (this.despesa = data));
    this.service.getLancamento2().subscribe((data) => (this.receita = data));
  }
}
