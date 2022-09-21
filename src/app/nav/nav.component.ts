import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   //Dependency injection
  constructor() { }
  auth:boolean=false;
  //STRING INTERPOLATION
  title = 'amazon';
  //PROPERTY BINDING
  public logo="https://pngimg.com/uploads/amazon/amazon_PNG5.png";
  //EVENT BINDING
  // onSearch()
  // {
  //   alert("Will contact shortly");
  // }

  //Accessing the Search Component
  //Property
  productentered: string=' '  //Laptop

  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }

  ngOnInit(): void {
  }

}
