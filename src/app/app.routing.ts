import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'roomService', component: RoomServiceComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'facilities', component: FacilitiesComponent },
    { path: 'ride', component: RideComponent },
    { path: 'supplyRestock', component: SupplyRestockComponent },
    { path: 'orderFood', component: OrderFoodComponent },
    { path: 'account', component: AccountComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
];
export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);