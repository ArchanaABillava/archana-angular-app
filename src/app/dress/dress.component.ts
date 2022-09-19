import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productdetails1=[
    {
      "pid":"001",
      "image":"https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
      "pname":"Jump Suit",
      "pdescription":"Buy trending Watch for women  at best prices. ",
      "Status":"In Stock",
      "price":999
    },
    {
      "pid":"002",
      "image":"https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      "pname":"Jeans",
      "pdescription":"Buy trending Watch for women  at best prices. ",
      "Status":"Out of Stock",
      "price":1299
    },
    {
      "pid":"003",
      "image":"https://sc04.alicdn.com/kf/H479e2e1dcb5447ec9b57e28199369b28D.png",
      "pname":"Party Dress",
      "pdescription":"Buy trending Watch for women  at best prices. ",
      "Status":"In Stock",
      "price":1590
    }
  ]
  productdetails2=[ 
    {
      "pid":"004",
      "image":"https://staticimg.titan.co.in/Taneira/Catalog/SPT06L00299_1.jpg?pView=pdp&impolicy=pqmed&imwidth=640",
      "pname":"Saree",
      "pdescription":"Buy trending Watch for women  at best prices. ",
      "Status":"Out of Stock",
      "price":1000
    },
    {
      "pid":"005",
      "image":"https://assets.ajio.com/medias/sys_master/root/20210403/mJ12/60686b0e7cdb8c1f147562bb/-473Wx593H-461152134-green-MODEL.jpg",
      "pname":"Skirt",
      "pdescription":"Buy trending Watch for women  at best prices. ",
      "Status":"Not available",
      "price":599
    },
    {
      "pid":"006",
      "image":"https://contents.mediadecathlon.com/p1900998/0381440b55436cd4d0cf2c8f3a79d3e9/p1900998.jpg",
      "pname":"Hoodies",
      "pdescription":"Buy trending Watch for women  at best prices. ",
      "Status":"In Stock",
      "price":1999
    }
  ]
  productdetails3=[
    {
      "pid":"007",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM87IC4U_1gSQgkqBsLL5jE2KboQy4lcQRA78Z2Q-RPZSmL9wM5aq9_2So-o79AywZGYk&usqp=CAU",
      "pname":"Shorts",
      "pdescription":"Buy trending Watch for women  at best prices. ",
      "Status":"In Stock",
      "price":599
    },
    {
      "pid":"008",
      "image":"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13930788/2021/8/6/38d6c0e3-cda3-4059-a673-2cdb0bafae181628241011946-DILLINGER-Women-Tshirts-8941628241011571-1.jpg",
      "pname":"Tshirts",
      "pdescription":"Buy trending Watch for women  at best prices. ",
      "Status":"Out of Stock",
      "price":459
    },
    {
      "pid":"009",
      "image":"https://assets.ajio.com/medias/sys_master/root/20210627/dwr5/60d96085aeb269a9e3203367/-473Wx593H-461624092-green-MODEL.jpg",
      "pname":"Saree",
      "pdescription":"Buy trending Watch for women  at best prices. ",
      "Status":"Not available",
      "price":1590
    }
    
  ]


  productdetails4=[
    {
      "pid":"001",
      "image":"https://images-eu.ssl-images-amazon.com/images/I/618Wek95laS._AC._SR360,460.jpg",
      "pname":"SHIRT",
      "pdescription":"Buy trending clothes for  men at best prices.",
      "Status":"In Stock",
      "price":1200
    },
    {
      "pid":"002",
      "image":"https://m.media-amazon.com/images/I/71dFMe8x5gL._UY550_.jpg",
      "pname":"TSHIRT",
      "pdescription":"Buy trending clothes for  men at best prices.",
      "Status":"Out of Stock",
      "price":1299
    },
    {
      "pid":"003",
      "image":"https://i.pinimg.com/736x/8e/cc/82/8ecc8246d420fd42e68ffd0d180f2928.jpg",
      "pname":"FORMALS",
      "pdescription":"Buy trending clothes for  men at best prices.",
      "Status":"In Stock",
      "price":1590
    }
  ]
  productdetails5=[ 
    {
      "pid":"004",
      "image":"https://images-eu.ssl-images-amazon.com/images/I/81Lg1x1O29L._AC._SR360,460.jpg",
      "pname":"Pant",
      "pdescription":"Buy trending clothes for  men at best prices.",
      "Status":"Out of Stock",
      "price":900
    },
    {
      "pid":"005",
      "image":"https://i.pinimg.com/originals/11/5c/1e/115c1e633af9f3f5d963301461e5b58f.jpg",
      "pname":"Party wears",
      "pdescription":"Buy trending clothes for  men at best prices.",
      "Status":"Not available",
      "price":10000
    },
    {
      "pid":"006",
      "image":"https://i.pinimg.com/236x/6b/8e/d8/6b8ed8c1539f6d015b1d5b9bf8ae8a15--fall-fashion-fashion-men.jpg",
      "pname":"Hoodies",
      "pdescription":"Buy trending clothes for  men at best prices.",
      "Status":"In Stock",
      "price":1239
    }
  ]
  productdetails6=[
    {
      "pid":"007",
      "image":"https://5.imimg.com/data5/ED/BO/MY-11410518/mens-cotton-casual-trouser-1000x1000.jpg",
      "pname":"Pants",
      "pdescription":"Buy trending clothes for  men at best prices.",
      "Status":"In Stock",
      "price":799
    },
    {
      "pid":"008",
      "image":"https://i.pinimg.com/236x/d9/43/f2/d943f25b836cb7f3b749241da2b4337c.jpg",
      "pname":"Formals",
      "pdescription":"Buy trending clothes for  men at best prices.",
      "Status":"Out of Stock",
      "price":499
    },
    {
      "pid":"009",
      "image":"https://i.pinimg.com/236x/0f/9c/9f/0f9c9f7c5f669b5d9b45dc8cd26d6c2f.jpg",
      "pname":"Formals",
      "pdescription":"Buy trending clothes for  men at best prices. ",
      "Status":"Not available",
      "price":1899
    }
    
  ]


}
