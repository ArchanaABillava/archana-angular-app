import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import { ContactService } from '../contact.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   
  cont:Contact[]=[];

  constructor(private contservice:ContactService) { }

  ngOnInit(): void {
    const contObservable=this.contservice.getContactDetails();
    contObservable.subscribe((contData:Contact[])=>{
      this.cont=contData;
    })
  }

}
