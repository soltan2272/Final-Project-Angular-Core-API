import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedItemsComponent } from './selected-items/selected-items.component';



@NgModule({
  declarations: [
    SelectedItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SelectedItemsComponent]
})
export class CartModule { }
