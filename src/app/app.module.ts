import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from 'src/container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [AppComponent, ContainerComponent, NavbarComponent, DisplayComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
