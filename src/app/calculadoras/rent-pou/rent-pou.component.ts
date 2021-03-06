import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-pou',
  templateUrl: './rent-pou.component.html',
  styleUrls: ['./rent-pou.component.css'],
})
export class RentPouComponent implements OnInit {
  constructor() {}

  c = 0;
  i = 0;
  r = 0.1733 / 100;
  t = 0;
  s = 0;

  getJurosComp() {
    let list: number[] = [];
    for (let x = 1; x <= this.t; x++) {
      list.push((this.c += this.c * this.r));
    }
    return list;
  }

  ngOnInit() {}
}
