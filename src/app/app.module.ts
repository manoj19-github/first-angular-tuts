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
import { SearchProductComponent } from './search-product/search-product.component';
import { ReferenceComponent } from './reference/reference.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

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
    SearchProductComponent,
    ReferenceComponent,
    CustomerListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
