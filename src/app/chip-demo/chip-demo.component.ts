import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-demo',
  templateUrl: './chip-demo.component.html',
  styleUrls: ['./chip-demo.component.css']
})
export class ChipDemoComponent implements OnInit {

  values = ['1', '2'];
  constructor() { }

  ngOnInit() {
  }

}