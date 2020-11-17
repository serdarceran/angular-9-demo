import { Component, OnInit } from "@angular/core";
import { NumberChangedEvent } from "./local-number.directive";

@Component({
  selector: "app-number-input",
  templateUrl: "./number-input.component.html",
  styleUrls: ["./number-input.component.css"]
})
export class NumberInputComponent implements OnInit {
  fuel = 5;
  fuel2 = 4.6;
  constructor() {}

  ngOnInit() {}

  fuelChanged(event: NumberChangedEvent, changedFuel) {}
}
