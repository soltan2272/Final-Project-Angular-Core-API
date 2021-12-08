import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductModule } from './Components/product/product.module';

const routes: Routes = [
  {path:"" , redirectTo : '/home', pathMatch : 'full'},
  {path:"home" , component:HomeComponent},
  {path:"products" , 
  loadChildren : ()=> import ('src/app/Components/product/product.module').then(m=> m.ProductModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
