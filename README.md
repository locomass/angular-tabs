# Angular Reusable Tab Control

[![Current Version](https://img.shields.io/badge/version-1.0.2-green.svg)](https://github.com/locomass/angular-tabs/packages/369089)

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.9. <br/>
See [Packages](https://github.com/locomass/angular-tabs/packages).

## Installation

Install from the command line:

```json
npm install @locomass/mass-tabs@1.0.2
```

Install via package.json:

```json
"@locomass/mass-tabs": "1.0.2"
```
Import MassTab Module in to your AppModule

```typescript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MassTabsModule } from '@locomass/mass-tabs';

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

```


## Usage
```html
<mass-tabs>
      <mass-tab headText="First" active="true">
          First tab content here.This is an active tab.
      </mass-tab>
      <mass-tab headText="Second" [disabled]="true">
          This is a disabled tab, can not be seen.
      </mass-tab>
      <mass-tab headText="Third">
          Third tab content here.
      </mass-tab>
</mass-tabs>
```

## Documentation

| Property | Component Name | Details
| ------------- | ------------- | ------------- |
| headText  | TabComponent  | tab header text  |
| active  | TabComponent | determines wheather tab is active tab or not  |
| disabled  | TabComponent  | determines a disabled tab  |
| activeHeaderTextColor | TabsComponent |active headerText color |
| headerTextColor | TabsComponent | headerText color |
