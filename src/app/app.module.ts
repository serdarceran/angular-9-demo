import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FocusNextDirective } from "./focus-next.directive";
import { ApplyPanelComponent } from "./apply-panel/apply-panel.component";
import { ChipDemoComponent } from "./chip-demo/chip-demo.component";
import { ChipsModule } from "primeng/chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { NumberFormatDirective } from "./chip-demo/number-format.directive";
import { ToLocalNumberStringPipe } from "./chip-demo/to-local-number-string.pipe";
import { InputNumberModule } from "primeng/inputnumber";
import { NumberInputComponent } from "./number-input/number-input.component";
import { LocalNumberDirective } from "./number-input/local-number.directive";
import { NumberInput2Directive } from './number-input/number-input2.directive';
import { NumberInput3Directive } from './number-input/number-input3.directive';
import { NumberInput4Directive } from './number-input/number-input4.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChipsModule,
    BrowserAnimationsModule,
    ChipsModule,
    ButtonModule,
    InputNumberModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FocusNextDirective,
    ApplyPanelComponent,
    ChipDemoComponent,
    NumberFormatDirective,
    ToLocalNumberStringPipe,
    NumberInputComponent,
    LocalNumberDirective,
    NumberInput2Directive,
    NumberInput3Directive,
    NumberInput4Directive
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
