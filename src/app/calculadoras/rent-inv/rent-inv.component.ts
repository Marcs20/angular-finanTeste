import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-inv',
  templateUrl: './rent-inv.component.html',
  styleUrls: ['./rent-inv.component.css'],
})
export class RentInvComponent implements OnInit {
  c = 0;
  i = 0;
  t = 0;
  m = 0;

  constructor() {}

  ngOnInit() {}

  getJurosComp() {
    for (let x = 1; x <= this.t; x++) {
      this.m = this.c * (1 + this.i) ** x;
    }
    return this.m;
  }
}
