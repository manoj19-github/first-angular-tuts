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
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CustomService } from './services/myservice.service';
import { AllUsersComponent } from './all-users/all-users.component';
import { userService } from './services/users.service';
import { UserDetailsComponent } from './user-details/user-details.component';

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
    Comp1Component,
    Comp2Component,
    AllUsersComponent,
    UserDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CustomService, userService],
  bootstrap: [AppComponent],
})
export class AppModule {}
