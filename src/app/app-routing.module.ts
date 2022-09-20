import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { RefridgeratorComponent } from './refridgerator/refridgerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { DressComponent } from './dress/dress.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './productdetails/product-details.component';


//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'search',component:SearchComponent},
  {path:'fridge',component:RefridgeratorComponent},
  {path:'washingmachine',component:WashingmachineComponent},
  {path:'amazondeals',component:AmazondealsComponent},
  {path:'microoven',component:MicroovenComponent},
  {path:'dress',component:DressComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'productDetails',component:ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

