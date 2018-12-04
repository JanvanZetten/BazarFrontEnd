import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Login/login.component';
import {BookBoothComponent} from './booth/book-booth/book-booth.component';
import {ShowReservationBoothComponent} from "./booth/show-reservation-booth/show-reservation-booth.component";
import {BookingComponent} from './booking/booking.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'booths', component: BookBoothComponent},
    {path: 'cancel', component: ShowReservationBoothComponent},
    {path: 'user', component: BookingComponent},
    {path: '', component: HomeComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
