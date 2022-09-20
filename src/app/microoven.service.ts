import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
// access microoven.ts 
import {Microoven} from './microoven'
@Injectable({
  providedIn: 'root'
})
export class MicroovenService {

  constructor() { }
  micro:Microoven[]=[
    {
      pid:1,
      pname:'Nail Paint',
      pdescription:'Long lasting with best texture and many color options ',
      price:199,
      img:'https://images.unsplash.com/photo-1636019411401-82485711b6ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpbCUyMHBvbGlzaHxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
      pid:2,
      pname:'Nivea Moisturiser',
      pdescription:'Nivea Soft Light Moisturiser Cream  keeps you feeling fresh',
      price:399,
      img:'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/lr7iip9pdwlpajbbbof7.jpg'
    },
    {
      pid:3,
      pname:'Perfume',
      pdescription:'Premium Long Lasting Fragrance Spray -highest selling brand  in India.  ',
      price:1999,
      img:'https://media.allure.com/photos/614351d3934fb87214166c42/1:1/w_1196,h_1196,c_limit/Yves%20Saint%20Laurent%20Mon%20Paris.jpeg'
    },
    {
      pid:4,
      pname:'Lipstick',
      pdescription:'Best Red Lipstick Shades for 2022 - Iconic Red Lip Colors -long lasting',
      price:990,
      img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1594998689-2511153-1594998673.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=480:*'
    },
    {
      pid:5,
      pname:'Compact Powder',
      pdescription:'Maybelline New York Compact Powder, With SPF to Protect Skin from Sun',
      price:599,
      img:'https://m.media-amazon.com/images/I/51wfOpdqHyL._SY355_.jpg'
    },
    {
      pid:6,
      pname:'Eyeliner',
      pdescription:'Be it rain or trouble , a waterproof eyeliner will always be with you! ',
      price:790,
      img:'https://cdn.shopify.com/s/files/1/0602/3158/1920/products/precision_waterproof_eyeliner_1_22eca24b-42e5-4a02-9bdc-037ef28fded2.jpg?v=1654046545'
    }
  ]

  public getMicroOvenDetails(): any{
    const microObservable= new Observable (observe =>{
      setTimeout(()=>{
        observe.next(this.micro);
      },500);
    });
    return microObservable;
  }
 
}
