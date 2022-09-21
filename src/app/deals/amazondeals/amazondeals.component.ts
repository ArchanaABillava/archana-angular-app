import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";

// import { AuthService } from 'src/app/auth.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-amazondeals',
  templateUrl: './amazondeals.component.html',
  styleUrls: ['./amazondeals.component.css']
})
export class AmazondealsComponent implements OnInit {

  constructor() { }
  
  

  ngOnInit(): void {
  }
all:any=(alldeals as any).default;
}
