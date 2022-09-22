import { Component, OnInit , Output ,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {

@Input() counterValue: number=1;
//counter property

countLessThanOne=true;
countMore=true;

@Output() countEmitter = new EventEmitter();
  @Output() quantityEmitter = new EventEmitter();
  PostData() {
    this.countEmitter.emit(this.counterValue);
    this.quantityEmitter.emit(this.counterValue);
  }


// PostValue(){
//   this.countEmitter.emit(this.counterValue);
// }
 


// @Output() counterEmitter = new EventEmitter();
decrement() {
  if (this.counterValue == 1) {
    this.countLessThanOne = false;
  }
  else {
    this.countLessThanOne = true;
    this.counterValue--;
  }
  this.PostData();
}

increment() {
  this.counterValue++;
  this.countLessThanOne = true;
  this.PostData();
}

  constructor() { }

  ngOnInit(): void {
  }


  // //increment and decrement
  // decrement(){
  //   if(this.counterValue==1)
  //   {
  //     this.countLessThanOne=false;
  //     this.countMore=true;
  //   }
  //   else{
  //     this.countLessThanOne=true;
  //     this.countMore=true;
  //     this.counterValue--;
  //   }
  //   this.PostValue();
  // }

  // increment()
  // {
  //   if(this.counterValue==15)
  //   {
  //     this.countMore=false;
  //     this.countLessThanOne=true;
  //   }
  //   else{
  //     this.countMore=true;
  //     this.countLessThanOne=true;
  //     this.counterValue++;
  //   }
  //   this.PostValue();
    
  // }
}
