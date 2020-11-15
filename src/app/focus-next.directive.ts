import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "input"
})
export class FocusNextDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  @Input() focusNextId: string;

  ngOnInit() {
    console.log(this.focusNextId);
  }

  @HostListener("keydown.enter", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    const inputEl = this.elementRef.nativeElement as HTMLInputElement;
    console.log(this.focusNextId);
    if (this.focusNextId) {
      const nextEl = inputEl.ownerDocument.querySelector(
        `#${this.focusNextId}`
      ) as HTMLElement;
      nextEl.focus();
    } else {
      let focusEl: HTMLElement;
      let parentEl = inputEl.parentElement;
      while (parentEl && !focusEl) {
        const allElsDic = parentEl.querySelectorAll("input, select");
        const allEls = Object.values(allElsDic);
        const inputElIndex = allEls.indexOf(inputEl);
        if (inputElIndex + 1 === allEls.length) {
          parentEl = parentEl.parentElement;
        } else {
          focusEl = allEls[inputElIndex + 1] as HTMLElement;
        }
      }
      if (focusEl) {
        focusEl.focus();
      } else {
        console.warn(`No element found to focus next`);
      }
    }
  }
}
