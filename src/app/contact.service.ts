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
      cname:'ABC Company',
      cdescription:'AAA BBB CCC',
      caddress:'Bangalore',
      cphone:9876543210,
      img:''
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
