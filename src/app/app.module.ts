import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { RoomServiceComponent } from './room-service/room-service.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RideComponent } from './ride/ride.component';
import { SupplyRestockComponent } from './supply-restock/supply-restock.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtherServiceComponent } from './other-service/other-service.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogueComponent,
    RoomServiceComponent,
    PaymentComponent,
    BookingComponent,
    RoomsComponent,
    FacilitiesComponent,
    RideComponent,
    SupplyRestockComponent,
    OrderFoodComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    OtherServiceComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
