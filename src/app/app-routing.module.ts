import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
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
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';


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
  {path:'products',component:ProductdetailsComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

