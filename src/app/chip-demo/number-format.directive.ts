import { Directive, EventEmitter,  HostListener, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";

@Directive({
  selector: "[appNumberFormat]"
})
export class NumberFormatDirective implements OnInit {
  @Output()
  numberAdded = new EventEmitter<number>();

  constructor() {}
  ngOnInit(): void {
   
  }

  @HostListener("onAdd", ["$event"])
  clickEvent(event: {value:string}) {
    const vv = +event.value.replace(',', '.');
    this.numberAdded.emit(vv);
  }
}
