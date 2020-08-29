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
<mass-tabs activeHeaderTextColor='#ff6358' headerTextColor='#656565'>
      <mass-tab headText="First" active="true">
          First wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</mass-tab>
      <mass-tab headText="Second">
          Second wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
      </mass-tab>
      <mass-tab headText="Third">
          Welcome to mass Tabs 😎😎
      </mass-tab>
</mass-tabs>
```

## Documentation

coming soon...
