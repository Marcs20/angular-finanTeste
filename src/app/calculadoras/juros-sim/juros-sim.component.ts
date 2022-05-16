import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

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

  getJurosSimp() {
    let list: number[] = [];
    for (let x = 1; x <= this.t; x++) {
      list.push(this.c * (1 + (this.i / 100) * x));
    }
    return list;
  }

  @ViewChild('myCanvas', { static: true }) elemento: ElementRef;
  ngOnInit() {
    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ['#0E73F5', 'red', 'green', 'orange'],
          },
        ],
      },
    });
  }
}
