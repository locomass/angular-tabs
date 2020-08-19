import { Component, OnInit, ContentChildren, QueryList, Input, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'max-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  public top = true;
  @Input() scrollBars = false;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild('container', {read: ElementRef}) container: ElementRef<any>;
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

  scrollLeft(): void {
    this.container.nativeElement.scrollTo({ left: (this.container.nativeElement.scrollLeft - 50),
      behavior: 'smooth' });
  }

  scrollRight(): void {
    this.container.nativeElement.scrollTo({ left: (this.container.nativeElement.scrollLeft + 50),
      behavior: 'smooth' });
  }
}
