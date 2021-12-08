import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultViewModel } from '../ViewModels/result-view-model';

@Injectable({
  providedIn: 'root'
})
export class SearchFiltersService {

  constructor(private http:HttpClient) { }



  SearchByName(name:string):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}Search/Name/`+name);
   }
   
   filterPriceLessThan(price:number):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}Search/PriceLessThan/`+price);
   }

   filterPriceMoreThan(price:number):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}Search/PriceMoreThan/`+price);
   }

   filterRate(Rate:number):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}Search/PriceMoreThan/`+Rate);
   }
   
   filterCategory(Category:string):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}Search/PriceMoreThan/`+Category);
   }

   
}
