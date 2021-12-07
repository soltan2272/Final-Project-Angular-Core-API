import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { AddproductformComponent } from './addproductform/addproductform.component';
import { EditprofileformComponent } from './editprofileform/editprofileform.component';
import { SearchfromComponent } from './searchfrom/searchfrom.component';
import { FilterformComponent } from './filterform/filterform.component';



@NgModule({
  declarations: [
    LoginformComponent,
    SignupformComponent,
    CheckoutformComponent,
    AddproductformComponent,
    EditprofileformComponent,
    SearchfromComponent,
    FilterformComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AddproductformComponent,CheckoutformComponent,
           EditprofileformComponent,FilterformComponent,
           LoginformComponent,SearchfromComponent,
           SignupformComponent
  
  ]
})
export class CustformsModule { }
