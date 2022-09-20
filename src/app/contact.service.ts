import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
// 
import {Contact} from './contact'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  cont:Contact[]=[
    {
      cname:'tietoevry',
      cdescription:'5th Floor, E Block ,Global Village,RVCE Post ,Main Road',
      caddress:'Bangalore',
      cphone:9876543210,
      img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
      cname:'tietoevry',
      cdescription:'5th Floor, E Block ,Global Village,RVCE Post ,Main Road',
      caddress:'Pune',
      cphone:9876543210,
      img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
      cname:'tietoevry',
      cdescription:'5th Floor, E Block ,Global Village,RVCE Post ,Main Road',
      caddress:'Mumbai',
      cphone:9876543210,
      img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    }
    
  ]

  public getContactDetails(): any{
    const contObservable= new Observable (observe =>{
      setTimeout(()=>{
        observe.next(this.cont);
      },500);
    });
    return contObservable;
  }
 
}
