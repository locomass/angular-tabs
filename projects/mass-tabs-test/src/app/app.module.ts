import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MassTabsModule } from '@locomass/mass-tabs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MassTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
