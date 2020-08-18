import { Component, OnInit, ContentChildren, QueryList, Input, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'max-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  public top = true;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.tabs.first.active = true;
    }
  }

  headClick(selectedTab: TabComponent): void {
      this.tabs.forEach((tab: TabComponent) => {
        tab.active = false;
      });

      selectedTab.active = true;
  }
}
