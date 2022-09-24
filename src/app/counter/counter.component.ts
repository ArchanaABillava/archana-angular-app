import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count=1;
  
  //Receive the CounterValue from Counterchild

  receivecount($event:number){
    this.count=$event;
  }

}
