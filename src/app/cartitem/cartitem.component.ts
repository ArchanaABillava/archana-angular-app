import { Component, OnInit } from '@angular/core';
//Add to cart - cart items
import {Cartitem} from '../cartitem';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
//npm install sweetalerts2
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  constructor(private cartSvc: CartService, private router:Router) { }
  //cart List
  carts:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1   
  }
  // quanties:number=0;
  cartData: any = [];
  totalprice: number = 0;
  quantity = 1;

  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), intialValue);
    return a;
  }

  cart: Cartitem[] = [];

  delete(deleteItem: Cartitem) {
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.pname)      
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully'
    })
    this.ngOnInit();
  }
  onClick(){
    this.router.navigate(['amazondeals'])
  }

  ngOnInit(): void {

    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
  }

}
