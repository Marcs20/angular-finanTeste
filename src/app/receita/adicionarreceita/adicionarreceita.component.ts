import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../../model/lancamento';
import { FinancaService } from '../../service/financa.service';

@Component({
  selector: 'app-adicionarreceita',
  templateUrl: './adicionarreceita.component.html',
  styleUrls: ['./adicionarreceita.component.css'],
})
export class AdicionarreceitaComponent implements OnInit {
  constructor(private router: Router, private service: FinancaService) {}

  lancamentoModel = new Lancamento();

  add() {
    this.service.add2(this.lancamentoModel).subscribe((data) => {
      alert(this.lancamentoModel.nome + ' registrado com sucesso');
      this.router.navigate(['mostrarreceita']);
    });
  }

  ngOnInit() {}
}
