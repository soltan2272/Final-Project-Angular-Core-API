import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule, Routes } from '@angular/router';

const routs:Routes=[
  {path:"productdetails/:pid", component:ProductdetailsComponent}
]

@NgModule({
  declarations: [
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routs)
  ]
})
export class ProductModule {
  pro!:Observable<IProduct[]>
  constructor(private productService:HttpClient) { }


  // getAllProducts() :Observable<IProduct[]>
  // {
  //   return this.productService.get<IProduct[]>(`${environment.ApiUrl}/Product`);
  // }

  // getProductByID(ID:number) :Observable<IProduct>
  // {
  //   return this.productService.get<IProduct>(`${environment.ApiUrl}/Product/`+ID);
  // }

  // getProductBySuppID(SuppID:number) :Observable<IProduct>
  // {
  //  return this.productService.get<IProduct>(`${environment.ApiUrl}/product/GetProductBySupplierID/`+SuppID);
  // }

  // addProduct(prod:IProduct) :Observable<any>
  // {
  //   const httpOptions={
  //     headers : new HttpHeaders({
  //       'content-type':'application/JSON'
  //     })
  //   }
  //   return this.productService.post(`${environment.ApiUrl}/Product/addProduct`,JSON.stringify(prod),httpOptions);
  // }

  // editProduct(prod:IProduct) :Observable<any>
  // {
  //   const httpOptions={
  //     headers : new HttpHeaders({
  //       'content-type':'application/JSON'
  //     })
  //   }
  //   return this.productService.put(`${environment.ApiUrl}/Product/editProduct`,JSON.stringify(prod),httpOptions);
  // }

  // deleteProduct(ID:number):void
  // {
  //   this.productService.delete(`${environment.ApiUrl}/Product/Delete/`+ID)
  // }


 }
