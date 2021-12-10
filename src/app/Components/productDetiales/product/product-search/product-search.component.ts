import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSearchService } from 'src/app/Services/productSearchService/product-search.service';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  searchname: string | undefined;
  resultsearch: IndexProduct[] = [];
   searchcategory!: number;

  constructor(private activerouter: ActivatedRoute,
    private searchservice: ProductSearchService,
    private router: Router) { }
    
  ngOnInit(): void {

    this.activerouter.paramMap.subscribe(param => {
      this.searchname = String(param.get('name'));
      this.searchservice.filterSearchName(this.searchname).subscribe(reaponse => {
        this.resultsearch = reaponse.data;
      })

    })



    this.activerouter.paramMap.subscribe(param => {
      this.searchcategory = Number(param.get('id'));
      this.searchservice.filterCategoryName(this.searchcategory).subscribe(reaponse => {
        this.resultsearch = reaponse.data;
      })

    })
  }



  getproductditails(id: number) {
    this.router.navigate(['/products/productdetails', id]);

  }

}
