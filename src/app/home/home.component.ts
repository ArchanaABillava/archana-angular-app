import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
   //TWO-WAY BINDING
   name="John"
   //THEME FOR CAROSEL
   mycolor='red';
// array -*ngFor
// key:value pair
Products:any[]=[
  {
    "productname":"kids dress"
  },
  {
    "productname":"kids toys"
  },
  {
    "productname":"Laptops"
  },
  {
    "productname":"Mobiles"
  },
  {
    "productname":"Watch"
  },
  {
    "productname":"Footwear"
  },
  {
    "productname":"Headphones"
  },
  {
    "productname":"Washing machine"
  },
  {
    "productname":"Clothes"
  }
]
//Event to hide products
isVisible:boolean=true;
hide_products()
{
  this.isVisible=!this.isVisible;
}
//*ngSwitch
product='Laptop1'
 
//property errorcolor for style binding using ternary operator
errorcolor:string='red'

//array for style binding --ternary operator and ngSwitch
ProductDetails=[
  {
    "pid":"100",
    "pname":"Kids toys",
    "status":"Active",
    "color":"green"
  },
  {
    "pid":"101",
    "pname":"Headphones",
    "status":"Inactive",
    "color":"red"
  },
  {
    "pid":"102",
    "pname":"Kids dress",
    "status":"Out of Stock",
    "color":"yellow"
  },
  {
    "pid":"103",
    "pname":"Kids Books",
    "status":"Inactive",
    "color":"red"
  },
  {
    "pid":"104",
    "pname":"Headphones",
    "status":"Inactive",
    "color":"red"
  },
  {
    "pid":"105",
    "pname":"Kids dress",
    "status":"Out of Stock",
    "color":"yellow"
  },
  {
    "pid":"106",
    "pname":"Kids Books",
    "status":"Inactive",
    "color":"red"
  }
]

//style binding using  a function
getColor()
{
  return 'blue';
}
//ngClass
//Assignment :Task-7
productdetails=[
  {
    "pid":"(01)",
    "pname":"Clothing",
  },
  {
    "pid":"(02)",
    "pname":"Gadgets",
  },
  {
    "pid":"(03)",
    "pname":"Accessory",
  },
  {
    "pid":"(04)",
    "pname":"Toys",
  },
  {
    "pid":"(05)",
    "pname":"Toys",
  },
]
productdetails1=[
  {
    "pid":"001",
    "image":"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "pname":"Laptop",
    "pdescription":"This laptop is powered by 8GB RAM along with 1TB HDD of internal memory.",
    "Status":"In Stock",
    "price":10000
  },
  {
    "pid":"002",
    "image":"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlc3N8ZW58MHx8MHx8&w=1000&q=80",
    "pname":"Dress",
    "pdescription":"Ethnic Wear from a great selection at Clothing & Accessories Store.",
    "Status":"Out of Stock",
    "price":10000
  },
  {
    "pid":"003",
    "image":"https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=2000",
    "pname":"Headphones",
    "pdescription":"Headphones offers a soothing music experience with high-quality sound.",
    "Status":"In Stock",
    "price":10000
  }
]
productdetails2=[ 
  {
    "pid":"004",
    "image":"https://img.freepik.com/premium-photo/many-colorful-toys-collection-wooden-desk_488220-17409.jpg?w=2000",
    "pname":"Toys",
    "pdescription":"Shop Sound Toys from popular brands such as Mee Mee, Fisher-Price and more for best prices.",
    "Status":"Out of Stock",
    "price":10000
  },
  {
    "pid":"005",
    "image":"https://cdn.yehaindia.com/wp-content/uploads/2020/06/Jewellery-1.jpg",
    "pname":"Jewellery",
    "pdescription":"Buy trending jewellery designs for women, girls & men at best prices.",
    "Status":"Not available",
    "price":10000
  },
  {
    "pid":"006",
    "image":"https://5.imimg.com/data5/FP/OC/WC/SELLER-12167522/cosmetics-product-500x500.jpg",
    "pname":"Cosmetics",
    "pdescription":"With more than 1 Million selections available on beauty products .",
    "Status":"In Stock",
    "price":10000
  }
]
productdetails3=[
  {
    "pid":"007",
    "image":"https://thumbs.dreamstime.com/b/set-leather-handbags-24710262.jpg",
    "pname":"Bags",
    "pdescription":"Buy trending bags  for women, girls & men at best prices. ",
    "Status":"In Stock",
    "price":10000
  },
  {
    "pid":"008",
    "image":"https://www.india.com/wp-content/uploads/2017/08/footwear.jpg",
    "pname":"Footwears",
    "pdescription":"Buy trending Footwears for women, girls & men at best prices. ",
    "Status":"Out of Stock",
    "price":10000
  },
  {
    "pid":"009",
    "image":"https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "pname":"Watches",
    "pdescription":"Buy trending Watch for women, girls & men at best prices. ",
    "Status":"Not available",
    "price":10000
  }
  
]
//ngclass -created instance for the class products
prod:products=new products();
//using an array can access the properties and bind them to ngClass
prod_array:string[]=['blue','shadow']



//date property for pipe 
date_today:string | undefined;

price:number|undefined;
ngOnInit(): void {
  //initalize the date inthe onint function
  this.date_today=new Date().toDateString();
  this.price=1000;
  }

}
//ngClass
class products
{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}
