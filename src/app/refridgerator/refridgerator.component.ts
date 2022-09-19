import { Component, OnInit } from '@angular/core';
import * as refridgerator from "../data/refridgerator.json"
@Component({
  selector: 'app-refridgerator',
  templateUrl: './refridgerator.component.html',
  styleUrls: ['./refridgerator.component.css']
})
export class RefridgeratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
fridge:any=(refridgerator as any).default;

ProductDetail=false;
 showproductDetailsToggle()
 {
  this.ProductDetail=!this.ProductDetail;
 }

 toggleContent()
 {
  var content='';
  if(this.ProductDetail){
    content ='fa fa-plus'
  }
  else{
    content ='fa fa-minus'
  }
  return content;
 }
}
