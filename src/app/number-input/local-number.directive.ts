import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from "@angular/core";

import { NgModel } from "@angular/forms";

export interface NumberChangedEvent {
  prevValue: number;
  value: number;
}

@Directive({
  selector: "[ngModel]p-inputNumber",
  providers: [NgModel]
})
export class LocalNumberDirective implements OnInit, OnDestroy {
  @Output() numberValueChanged = new EventEmitter<NumberChangedEvent>();
  private nativeInput: HTMLInputElement;
  private blurEventFunc: () => void;
  private focusEventFunc: () => void;
  private prevValue: number;
  private preventUpdate = false;
  private preventBlurEvent = false;

  constructor(
    private elementRef: ElementRef,
    private ngModel: NgModel,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.nativeInput = this.getNativeInput();

    this.blurEventFunc = () => {
      if (this.preventBlurEvent) {
        return;
      }
      this.setBackgroundColor("white");
    };
    this.focusEventFunc = () => {
      this.prevValue = this.ngModel.value;
    };
    this.nativeInput.addEventListener("blur", this.blurEventFunc);
    this.nativeInput.addEventListener("focus", this.focusEventFunc);
  }

  ngOnDestroy(): void {
    this.nativeInput.removeEventListener("blur", this.blurEventFunc);
    this.nativeInput.removeEventListener("focus", this.focusEventFunc);
  }

  @HostListener("keydown.enter", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.preventBlurEvent = true;
    this.nativeInput.blur();
    this.nativeInput.focus();
    this.preventBlurEvent = false;
  }

  @HostListener("ngModelChange", ["$event"])
  onModelChange(event) {
    if (this.preventUpdate) {
      return;
    }
    if (this.prevValue.toFixed(5) !== event.toFixed(5)) {
      this.numberValueChanged.emit({ prevValue: this.prevValue, value: event });
      this.setBackgroundColor("lightskyblue");
    }
    this.prevValue = event;
  }

  @HostListener("keydown.escape", ["$event"])
  onCancel(event) {
    event.preventDefault();
    event.stopPropagation();
    const previousValue = this.ngModel.value;
    this.preventUpdate = true;
    this.nativeInput.blur();
    setTimeout(() => {
      this.preventUpdate = false;
      this.ngModel.reset(previousValue);
    }, 100);
  }

  private getNativeInput() {
    const inputEl = this.elementRef.nativeElement;
    return inputEl.querySelector("input");
  }

  private setBackgroundColor(color: "lightskyblue" | "white") {
    this.renderer.setStyle(this.nativeInput, "background-color", color);
  }
}
