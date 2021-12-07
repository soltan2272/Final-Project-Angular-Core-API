import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliershopComponent } from './suppliershop/suppliershop.component';



@NgModule({
  declarations: [
    SuppliershopComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SuppliershopComponent]
})
export class ShopModule { }
