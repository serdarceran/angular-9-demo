import {
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2
} from "@angular/core";
import { NgModel } from "@angular/forms";
import { InputNumber } from "primeng/inputnumber";
import { NumberChangedEvent } from "./local-number.directive";

@Directive({
  selector: "[ngModel][appNumberInput4]",
  providers: [NgModel]
})
export class NumberInput4Directive {
  @ContentChild(InputNumber) inputNumberComp: InputNumber;

  @Output() numberValueChanged = new EventEmitter<NumberChangedEvent>();
  private nativeInput: HTMLInputElement;
  private blurEventFunc: () => void;
  private focusEventFunc: () => void;
  private keydownEventFunc: (event: KeyboardEventInit) => void;
  private prevValue: number;
  private prevValueStr: string;

  constructor(
    private elementRef: ElementRef,
    private ngModel: NgModel,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.nativeInput = this.getNativeInput();

    this.focusEventFunc = () => {
      this.prevValue = this.ngModel.value;
      if (this.nativeInput.value) {
        this.prevValueStr = this.nativeInput.value;
      }
    };
    this.keydownEventFunc = event => {
      if (event.key !== "Enter" && event.key !== "Tab") {
        this.setBackgroundColor("white");
      }
    };

    this.nativeInput.addEventListener("focus", this.focusEventFunc);
    this.nativeInput.addEventListener("keydown", this.keydownEventFunc);
  }

  ngAfterViewInit(): void {
    this.inputNumberComp.step = 0;
  }

  ngOnDestroy(): void {
    this.nativeInput.removeEventListener("focus", this.focusEventFunc);
    this.nativeInput.removeEventListener("keydown", this.keydownEventFunc);
  }

  @HostListener("keydown.enter", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (!this.ngModel.value) {
      this.setBackgroundColor("lightcoral");
    }
    this.nativeInput.blur();
  }

  @HostListener("ngModelChange", ["$event"])
  onModelChange(event) {
    if (event == null) {
      this.setBackgroundColor("lightcoral");
      this.prevValue = event;
      this.nativeInput.focus();
      this.numberValueChanged.emit({ prevValue: this.prevValue, value: event });
      return;
    }
    if (
      this.prevValue == null ||
      this.prevValue.toFixed(5) !== event.toFixed(5)
    ) {
      this.numberValueChanged.emit({ prevValue: this.prevValue, value: event });
    }
    this.setBackgroundColor("white");
    this.prevValue = event;
    this.prevValueStr = this.nativeInput.value;
  }

  @HostListener("keydown.escape", ["$event"])
  onCancel(event) {
    event.preventDefault();
    event.stopPropagation();
    this.nativeInput.value = this.prevValueStr;
    this.nativeInput.blur();
  }

  private getNativeInput() {
    const inputEl = this.elementRef.nativeElement;
    return inputEl.querySelector("input");
  }

  private setBackgroundColor(color: "white" | "lightcoral") {
    this.renderer.setStyle(this.nativeInput, "background-color", color);
  }
}
