import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "input"
})
export class FocusNextDirective {
  constructor(private elementRef: ElementRef) {}
}
