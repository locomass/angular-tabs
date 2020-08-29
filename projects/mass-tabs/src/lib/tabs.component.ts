import {
  Component, OnInit, ContentChildren, QueryList, Input,
  AfterContentInit, ViewChild, ElementRef
} from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mass-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @Input() activeHeaderTextColor = '#ff6358';
  @Input() headerTextColor = '#656565';
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild('container', { read: ElementRef }) container: ElementRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      const first = this.tabs.toArray()[this.findFirstEnabled()];
      first.active = true;
    }
  }

  findFirstEnabled(): number {
    let activeIndex = 0;
    for (const tab of this.tabs) {
      if (activeIndex === 0 && !tab.disabled && tab.active) {
        break;
      }
      if (tab.disabled) {
        activeIndex++;
      }
      if (!tab.disabled) {
        break;
      }
    }
    return activeIndex;
  }

  active(currentTab: TabComponent): boolean {
    if (currentTab.disabled) { return false; }
    return currentTab.active;
  }

  headClick(selectedTab: TabComponent): void {
    if (selectedTab.disabled) {
      return;
    }

    this.tabs.forEach((tab: TabComponent) => {
      tab.active = false;
    });

    selectedTab.active = true;
  }

  /* scrollLeft(): void {
    if (this.top) {
      this.container.nativeElement.scrollTo({ left: (this.container.nativeElement.scrollLeft - 50),
        behavior: 'smooth' });
    } else {
      this.container.nativeElement.scrollTo({ top: (this.container.nativeElement.scrollTop - 50),
        behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    if (this.top) {
      this.container.nativeElement.scrollTo({ left: (this.container.nativeElement.scrollLeft + 50),
        behavior: 'smooth' });
    } else {
      this.container.nativeElement.scrollTo({ top: (this.container.nativeElement.scrollTop + 50),
        behavior: 'smooth' });
    }
  } */
}
