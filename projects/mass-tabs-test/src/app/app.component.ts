import { Component, ViewChild } from '@angular/core';
import { TabsComponent } from '@locomass/mass-tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mass-tabs-test';
  @ViewChild('tabs') tabsComponent: TabsComponent;

  /* top(): void {
    if (this.tabsComponent) {
      this.tabsComponent.top = true;
    }
  }

  left(): void {
    if (this.tabsComponent) {
      this.tabsComponent.top = false;
    }
  } */
}
