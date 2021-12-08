import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { IndexProduct } from 'src/app/ViewModels/index-product';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  indexProducts:IndexProduct[]=[];

  // imageObject = [{                           // https://www.npmjs.com/package/ng-image-slider
  //   image: 'assets/img/h4-slide.png',
  //   thumbImage: 'assets/img/h4-slide.png',
  //   title: 'iPhone 6 Plus'
  // }, {
  //   image: 'assets/img/h4-slide2.png',
  //   thumbImage: 'assets/img/h4-slide2.png',
  //   title: 'school supplies & backpacks.'
  // }, {
  //   image: 'assets/img/h4-slide3.png',
  //   thumbImage: 'assets/img/h4-slide3.png',
  //   title: ' Apple Store Ipod'
  // }, {
  //   image: 'assets/img/h4-slide4.png',
  //   thumbImage: 'assets/img/h4-slide4.png',
  //   title: ' Apple Store Ipod'
  // }, {
  //   image: 'assets/img/h4-slide4.png',
  //   thumbImage: 'assets/img/h4-slide4.png',
  //   title: ' Apple Store Ipod'
  // }, {
  //   image: 'assets/img/h4-slide2.png',
  //   thumbImage: 'assets/img/h4-slide2.png',
  //   title: 'school supplies & backpacks.'
  // }];
  
  // slides = [
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  // ];
  
  
  constructor(private productServes:ProductService){}

  ngOnInit(): void {
    this.productServes.getAllProducts().subscribe(
      (response) => {
        this.indexProducts = response.data;
      },
      (error) => { console.log(error) }
    )
  }

}
