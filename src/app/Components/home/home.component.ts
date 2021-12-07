import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
