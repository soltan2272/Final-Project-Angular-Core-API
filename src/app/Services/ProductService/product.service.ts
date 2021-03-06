import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  indexProduct():Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}product/userProducts`)
   }

 
  //  getProductsByCategoryID(catID:number):Observable<IproductApi[]>{
  //   return this.http.get<IproductApi[]>(`${environment.ApiUrl}/products?CateogryID=${catID}`)
  //  }
  //  getProductsByID(prodID:number):Observable<IproductApi>{
  //   return this.http.get<IproductApi>(`${environment.ApiUrl}/products/${prodID}`)

  //  }

  ProductDetails(id : number):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}product/`+id);
   }

}
