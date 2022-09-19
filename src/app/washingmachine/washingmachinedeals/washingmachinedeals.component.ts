import { Component, OnInit } from '@angular/core';
import * as wm from "../washingmachine.json";
@Component({
  selector: 'app-washingmachinedeals',
  templateUrl: './washingmachinedeals.component.html',
  styleUrls: ['./washingmachinedeals.component.css']
})
export class WashingmachinedealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
washingmach:any=(wm as any).default;

ProductDetail=false;
 showproductDetailsToggle()
 {
  this.ProductDetail=!this.ProductDetail;
 }

 toggleContent()
 {
  var content='';
  if(this.ProductDetail){
    content='fa fa-plus'
  }
  else{
    content='fa fa-minus'
  }
  return content;
 }

}
