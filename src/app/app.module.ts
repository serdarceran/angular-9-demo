import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FocusNextDirective } from "./focus-next.directive";
import { ApplyPanelComponent } from "./apply-panel/apply-panel.component";
import { ChipsModule } from "primeng/chips";
import { ChipDemoComponent } from './chip-demo/chip-demo.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ChipsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FocusNextDirective,
    ApplyPanelComponent,
    ChipDemoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
