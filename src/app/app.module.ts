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
import { ViewChildComponent } from './view-child/view-child.component';
import { View2ComponentComponent } from './view2-component/view2-component.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { SetBackgroundDirective } from './custom-directive/setbackground.directive';
import { MyDirectiveDirective } from './custom-directive/my-directive.directive';
import { MyHostDirective } from './custom-directive/my-host.directive';

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
    ViewChildComponent,
    View2ComponentComponent,
    CustomDirectiveComponent,
    SetBackgroundDirective,
    MyDirectiveDirective,
    MyHostDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
