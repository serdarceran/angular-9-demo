import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-chip-demo",
  templateUrl: "./chip-demo.component.html",
  styleUrls: ["./chip-demo.component.css"]
})
export class ChipDemoComponent implements OnInit {
  values = [1, 2, 3.4];
  constructor() {}

  ngOnInit() {}

  numberAdd(event: number) {
    console.log(">>>>", event);
    this.values.push(event);
  }
}
