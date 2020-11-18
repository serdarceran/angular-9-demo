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
  selector: "[ngModel][appNumberInput2]",
  providers: [NgModel]
})
export class NumberInput2Directive {
  @ContentChild(InputNumber) inputNumberComp: InputNumber;

  @Output() numberValueChanged = new EventEmitter<NumberChangedEvent>();
  private nativeInput: HTMLInputElement;
  private blurEventFunc: () => void;
  private focusEventFunc: () => void;
  private prevValue: number;
  private prevValueStr: string;

  constructor(
    private elementRef: ElementRef,
    private ngModel: NgModel,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.nativeInput = this.getNativeInput();

    this.blurEventFunc = () => {
      this.setBackgroundColor("white");
    };
    this.focusEventFunc = () => {
      this.prevValue = this.ngModel.value;
      this.prevValueStr = this.nativeInput.value;
    };
    this.nativeInput.addEventListener("blur", this.blurEventFunc);
    this.nativeInput.addEventListener("focus", this.focusEventFunc);
    this.nativeInput.addEventListener("keydown", event => {
      if (event.key !== "Enter") {
        this.setBackgroundColor("white");
      }
    });
  }

  ngAfterViewInit(): void {
    this.inputNumberComp.step = 0;
  }

  ngOnDestroy(): void {
    this.nativeInput.removeEventListener("blur", this.blurEventFunc);
    this.nativeInput.removeEventListener("focus", this.focusEventFunc);
  }

  @HostListener("keydown.enter", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (this.ngModel.value) {
      this.setBackgroundColor("lightskyblue");
    }
    this.inputNumberComp.onInputBlur(event);
  }

  @HostListener("ngModelChange", ["$event"])
  onModelChange(event) {
    if (event == null) {
      this.setBackgroundColor("red");
      this.numberValueChanged.emit({ prevValue: this.prevValue, value: event });
      return;
    }
    if (this.prevValue && this.prevValue.toFixed(5) !== event.toFixed(5)) {
      this.numberValueChanged.emit({ prevValue: this.prevValue, value: event });
    }
    this.setBackgroundColor("lightskyblue");
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

  private setBackgroundColor(color: "lightskyblue" | "white" | "red") {
    this.renderer.setStyle(this.nativeInput, "background-color", color);
  }
}
