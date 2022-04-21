import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Lancamento } from '../model/lancamento';
import { FinancaService } from '../service/financa.service';
import { SaldoService } from '../service/saldo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
