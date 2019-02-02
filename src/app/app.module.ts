import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
