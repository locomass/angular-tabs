import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'max-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() { }

  ngOnInit(): void {
  }

  headClick(selectedTab: TabComponent): void {
      this.tabs.forEach((tab: TabComponent) => {
        tab.active = false;
      });

      selectedTab.active = true;
  }
}
