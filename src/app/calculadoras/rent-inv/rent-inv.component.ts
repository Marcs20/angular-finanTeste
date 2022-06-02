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
    return this.m = this.c *100/ this.i

  }
}
