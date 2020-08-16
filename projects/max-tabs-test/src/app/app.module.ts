import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaxTabsModule } from '../../../max-tabs/src/lib/max-tabs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaxTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
