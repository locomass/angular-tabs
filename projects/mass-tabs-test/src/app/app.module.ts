import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MassTabsModule } from '../../../mass-tabs/src/lib/mass-tabs.module';

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
