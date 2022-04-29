import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConmponentaComponent } from './conmponenta/conmponenta.component';
import { ConmponentbComponent } from './conmponentb/conmponentb.component';

@NgModule({
  declarations: [
    AppComponent,
    ConmponentaComponent,
    ConmponentbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
