import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FocusNextDirective } from './focus-next.directive';
import { ApplyPanelComponent } from './apply-panel/apply-panel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FocusNextDirective, ApplyPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
