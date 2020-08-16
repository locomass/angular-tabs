import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TabsComponent, TabComponent],
  imports: [
    BrowserModule
  ],
  exports: [TabsComponent, TabComponent]
})
export class MaxTabsModule { }
