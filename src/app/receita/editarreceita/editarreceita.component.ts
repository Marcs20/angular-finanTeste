import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../../model/lancamento';
import { FinancaService } from '../../service/financa.service';

@Component({
  selector: 'app-editarreceita',
  templateUrl: './editarreceita.component.html',
  styleUrls: ['./editarreceita.component.css'],
})
export class EditarreceitaComponent implements OnInit {
  constructor(private router: Router, private service: FinancaService) {}

  lancamento: Lancamento = new Lancamento();

  editar() {
    let id = localStorage.getItem('id');
    this.service.getID2(+id).subscribe((data) => {
      this.lancamento = data;
    });
  }

  update() {
    this.service.update2(this.lancamento).subscribe((data) => {
      this.lancamento = data;
      alert('Atualizado!');
      this.router.navigate(['mostrarreceita']);
    });
  }

  ngOnInit() {}
}
