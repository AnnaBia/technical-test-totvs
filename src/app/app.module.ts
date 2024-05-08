import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PoFieldModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PoFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
