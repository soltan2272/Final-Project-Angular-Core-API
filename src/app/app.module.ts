import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './Components/cart/cart.module';
import { CustformsModule } from './Components/custforms/custforms.module';
import { LayoutModule } from './Components/layout/layout.module';
import { ProductModule } from './Components/product/product.module';
import { ShopModule } from './Components/shop/shop.module';
import { UserModule } from './Components/user/user.module';
import { HomeComponent } from './Components/home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './Components/home/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    CustformsModule,
    LayoutModule,
    ProductModule,
    ShopModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
