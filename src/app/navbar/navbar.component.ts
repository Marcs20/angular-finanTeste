import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarComponent } from '../despesa/mostrar/mostrar.component';

import { Lancamento } from '../model/lancamento';
import { MostrarreceitaComponent } from '../receita/mostrarreceita/mostrarreceita.component';
import { FinancaService } from '../service/financa.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
