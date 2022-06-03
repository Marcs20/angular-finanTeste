import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-pou',
  templateUrl: './rent-pou.component.html',
  styleUrls: ['./rent-pou.component.css'],
})
export class RentPouComponent implements OnInit {
  constructor() {}

  c;
  i;
  r;
  t;
  s;

  getJurosComp() {
    let list: number[] = [];
    for (let x = 1; x <= this.t; x++) {
      list.push((this.s = this.s + (this.c * this.r) / 100));
    }
    return list;
  }

  ngOnInit() {}
}
