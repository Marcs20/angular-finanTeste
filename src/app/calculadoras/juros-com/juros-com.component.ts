import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-com',
  templateUrl: './juros-com.component.html',
  styleUrls: ['./juros-com.component.css'],
})
export class JurosComComponent implements OnInit {
  c = 0;
  i = 0;
  t = 0;
  m = 0;

  constructor() {}

  ngOnInit() {}

  getJurosComp() {
    let list: number[] = [];
    for (let x = 1; x <= this.t; x++) {
      list.push((this.m = this.c * (1 + this.i / 100) ** x));
    }
    return list;
  }
}
