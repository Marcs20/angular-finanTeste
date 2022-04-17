import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-sim',
  templateUrl: './juros-sim.component.html',
  styleUrls: ['./juros-sim.component.css'],
})
export class JurosSimComponent implements OnInit {
  c = 0;
  i = 0;
  t = 0;

  constructor() {}

  ngOnInit() {}

  getJurosSimp() {
    let list: number[] = [];
    for (let x = 1; x <= this.t; x++) {
      list.push(this.c * (1 + (this.i / 100) * x));
    }
    return list;
  }
}
