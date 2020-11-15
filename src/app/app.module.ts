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
import { NumberFormatDirective } from './chip-demo/number-format.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChipsModule,
    BrowserAnimationsModule,
    ChipsModule,
    ButtonModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FocusNextDirective,
    ApplyPanelComponent,
    ChipDemoComponent,
    NumberFormatDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
