import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../../model/lancamento';
import { FinancaService } from '../../service/financa.service';

@Component({
  selector: 'app-mostrarreceita',
  templateUrl: './mostrarreceita.component.html',
  styleUrls: ['./mostrarreceita.component.css'],
})
export class MostrarreceitaComponent implements OnInit {
  constructor(private service: FinancaService, private router: Router) {}

  lancamento: Lancamento[] = [];

  delete(lanca: Lancamento) {
    this.service.delete2(lanca).subscribe((data) => {
      this.lancamento = this.lancamento.filter((l) => l !== lanca);
      alert('deletado!');
    });
  }

  count = 0

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

  update(lanca: Lancamento): void {
    localStorage.setItem('id', lanca.id.toString());
    this.router.navigate(['editarreceita']);
  }

  ngOnInit() {
    this.service.getLancamento2().subscribe((data) => (this.lancamento = data));
  }
}
