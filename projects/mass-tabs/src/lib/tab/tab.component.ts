import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mass-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() headText: string;
  @Input() active = false;
  @Input() disabled = false;
  constructor() { }
  ngOnInit(): void {
  }
}
