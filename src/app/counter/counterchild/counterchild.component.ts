import { Component, OnInit , Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {

//counter property
counterValue=1;
countLessThanOne=true;
countMore=true;

@Output() countEmitter=new EventEmitter();

PostValue(){
  this.countEmitter.emit(this.counterValue);
}
 


@Output() counterEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  //increment and decrement
  decrement(){
    if(this.counterValue==1)
    {
      this.countLessThanOne=false;
      this.countMore=true;
    }
    else{
      this.countLessThanOne=true;
      this.countMore=true;
      this.counterValue--;
    }
    this.PostValue();
  }

  increment()
  {
    if(this.counterValue==15)
    {
      this.countMore=false;
      this.countLessThanOne=true;
    }
    else{
      this.countMore=true;
      this.countLessThanOne=true;
      this.counterValue++;
    }
    this.PostValue();
    
  }
}
