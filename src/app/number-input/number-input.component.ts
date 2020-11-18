import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { NumberChangedEvent } from "./local-number.directive";

@Component({
  selector: "app-number-input",
  templateUrl: "./number-input.component.html",
  styleUrls: ["./number-input.component.css"]
})
export class NumberInputComponent implements OnInit {
  fuel = 5;
  fuel2 = 4.6;
  enableApplyButton = false;
  message = "";
  langs = [
    {
      name: "German",
      value: "de"
    },
    {
      name: "English",
      value: "en"
    }
  ];
  selectedLang = this.langs[0];

  constructor() {}
  

  ngOnInit() {}

  fuelChanged(event: NumberChangedEvent, changedFuel) {
    console.log("fuel changed: ", event.value);
  }

  applyit() {
    this.message = `${this.fuel} and ${this.fuel2} is sent to Backend`;
    this.enableApplyButton = false;
  }
}
