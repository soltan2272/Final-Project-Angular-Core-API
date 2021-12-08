import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  productid: number=0;
  product:IndexProduct | undefined;
  constructor(private ActRouter : ActivatedRoute , private router:Router , private ProService : ProductService) { }

  ngOnInit(): void {
    this.ActRouter.paramMap.subscribe(param =>{
      this.productid = Number(param.get('pid'));
      this.ProService.ProductDetails(this.productid).subscribe(res =>
        {
          this.product = res.data;
        })
    })
  }

}
