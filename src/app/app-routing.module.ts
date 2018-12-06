import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Login/login.component';
import {BookBoothComponent} from './booth/book-booth/book-booth.component';
import {ShowReservationBoothComponent} from "./booth/show-reservation-booth/show-reservation-booth.component";
import {BookingComponent} from './booking/booking.component';
import {HomeComponent} from "./home/home.component";
import {CreateUserComponent} from "./create-user/create-user.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'booths', component: BookBoothComponent},
    {path: 'user', component: BookingComponent},
    {path: '', component: HomeComponent},
    {path: 'createUser', component: CreateUserComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
