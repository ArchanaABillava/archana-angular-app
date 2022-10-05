import { Component, OnInit , EventEmitter ,Output} from '@angular/core';

// import { UserService } from '../user.service';
import {UserService} from '../user.service';
//Cart count
import { CartService } from '../cart.service';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public searchTerm:string=''
   //Dependency injection
  constructor(private authService:UserService ,private adminService:AdminService, private cartSvc:CartService) { }
  auth:boolean=false;
  admin:boolean=false;
  //Add to cart
  cartCount:number=0;
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
  
  this.authService.authSubject.subscribe(
    data => 
    {
      console.log('auth inside nav component: ' + data);
      this.auth = data;
    }
  );
  this.authService.authad.subscribe(
    data => 
    {
      console.log('auth inside nav component: ' + data);
      this.admin = data;
      console.log(this.admin);

    }
  );
  
  //Cart count
  this.cartSvc.getCartItems().subscribe(
    (response)=>
    {
      this.cartCount=response.length;
      console.log(this.cartCount);
    }
  )
  this.cartSvc.countSubject.subscribe(
    (response)=>
    {
      this.cartCount=response;
      console.log(this.cartCount);
    }
  )
  }
}
