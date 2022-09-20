import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//accessing ngModel for 2-way binding
import { FormsModule } from '@angular/forms';
//Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SquarePipe } from './square.pipe';
import { RefridgeratorComponent } from './refridgerator/refridgerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { WashingmachinedealsComponent } from './washingmachine/washingmachinedeals/washingmachinedeals.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { DealsComponent } from './deals/deals.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { DressComponent } from './dress/dress.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './productdetails/product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardsComponent,
    HomeComponent,
    SearchComponent,
    SquarePipe,
    RefridgeratorComponent,
    WashingmachineComponent,
    WashingmachinedealsComponent,
    AllproductsComponent,
    AdvertisementComponent,
    DealsComponent,
    AmazondealsComponent,
    CounterComponent,
    CounterchildComponent,
    MicroovenComponent,
    DressComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ProductDetailsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
