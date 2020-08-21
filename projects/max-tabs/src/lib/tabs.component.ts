import { Component, OnInit, ContentChildren, QueryList, Input,
  AfterContentInit, ViewChild, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'max-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit, OnChanges {
  @Input() top = true;
  @Input() scrollBars = false;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild('container', {read: ElementRef}) container: ElementRef<any>;
  textLeft = '<';
  textRight = '>';
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.tabs.first.active = true;
    }

    if (!this.top) {
      this.textLeft = '^';
      this.textRight = 'v';
    }
  }

  headClick(selectedTab: TabComponent): void {
      this.tabs.forEach((tab: TabComponent) => {
        tab.active = false;
      });

      selectedTab.active = true;
  }

  scrollLeft(): void {
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
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'top': {
            if (!this.top) {
              this.textLeft = '^';
              this.textRight = 'v';
            }
          }
        }
      }
    }
  }
}
