import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { GeneratorDirective } from './lib/generator';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
