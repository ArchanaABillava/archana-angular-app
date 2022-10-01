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
      img:'https://i.gadgets360cdn.com/large/contacts_small_1502888603934.jpg'
    },
    {
      cname:'tietoevry',
      cdescription:'5th Floor, E Block ,Global Village,RVCE Post ,Main Road',
      caddress:'Pune',
      cphone:9876543210,
      img:'https://i.gadgets360cdn.com/large/contacts_small_1502888603934.jpg'
    },
    {
      cname:'tietoevry',
      cdescription:'5th Floor, E Block ,Global Village,RVCE Post ,Main Road',
      caddress:'Mumbai',
      cphone:9876543210,
      img:'https://i.gadgets360cdn.com/large/contacts_small_1502888603934.jpg'
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
