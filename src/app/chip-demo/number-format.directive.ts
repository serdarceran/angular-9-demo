import {
  ContentChild,
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { Chips } from "primeng/chips";
import { Observable } from "rxjs";

@Directive({
  selector: "[appNumberFormat]"
})
export class NumberFormatDirective implements OnInit {
  @ContentChild(Chips) myChips: Chips;
  @Output()
  numberAdded = new EventEmitter<number>();

  constructor() {}
  ngOnInit(): void {}

  @HostListener("onAdd", ["$event"])
  clickEvent(event: { value: string }) {
    const vv = +event.value.replace(",", ".");
    if (isFinite(vv)) {
      console.log(`emit`, vv);
      this.numberAdded.emit(vv);
    } else {
      this.myChips.value.pop();
      console.error(`wrong format`);
    }
  }
}
