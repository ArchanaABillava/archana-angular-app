import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/products.json';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Fetch the data from products.json using the alias productdetails in line number 4
  product:any=(productdetails as any).default;
}
