import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    SelectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
