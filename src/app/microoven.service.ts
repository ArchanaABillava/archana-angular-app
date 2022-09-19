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
      pname:'Samsung',
      pdescription:'',
      price:5500,
      img:'https://www.lg.com/in/images/microwave-ovens/md05265262/gallery/MC3286BRUM-microwave-ovens-Front-view-D-01.jpg'
    },
    {
      pid:3,
      pname:'Samsung',
      pdescription:'',
      price:5500,
      img:'https://www.lg.com/in/images/microwave-ovens/md05265262/gallery/MC3286BRUM-microwave-ovens-Front-view-D-01.jpg'
    },
    {
      pid:4,
      pname:'Samsung',
      pdescription:'',
      price:5500,
      img:'https://www.lg.com/in/images/microwave-ovens/md05265262/gallery/MC3286BRUM-microwave-ovens-Front-view-D-01.jpg'
    },
    {
      pid:5,
      pname:'Samsung',
      pdescription:'',
      price:5500,
      img:'https://www.lg.com/in/images/microwave-ovens/md05265262/gallery/MC3286BRUM-microwave-ovens-Front-view-D-01.jpg'
    },
    {
      pid:6,
      pname:'Samsung',
      pdescription:'',
      price:5500,
      img:'https://www.lg.com/in/images/microwave-ovens/md05265262/gallery/MC3286BRUM-microwave-ovens-Front-view-D-01.jpg'
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
