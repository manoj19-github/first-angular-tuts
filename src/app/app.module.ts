import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from 'src/container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './display/display.component';
import { SeaarchComponent } from './seaarch/seaarch.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    DisplayComponent,
    SeaarchComponent,
    ProductsComponent,
    ProfileComponent,
    SelectorComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
