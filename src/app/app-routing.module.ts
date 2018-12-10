import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Login/login.component';
import {BookBoothComponent} from './booth/book-booth/book-booth.component';
import {BookingComponent} from './booking/booking.component';
import {HomeComponent} from "./home/home.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {BoothListComponent} from "./admin/booth/booth-list/booth-list.component";
import {UserListComponent} from "./admin/user/user-list/user-list.component";
import {AdminGuardService as AdminGuard} from './shared/services/admin-guard.service';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'booths', component: BookBoothComponent},
    {path: 'user', component: BookingComponent},
    {path: '', component: HomeComponent},
    {path: 'createUser', component: CreateUserComponent},
    {path: 'admin/booths', component: BoothListComponent, canActivate: [AdminGuard], data: {expectedRole: 'Administrator'}},
    {path: 'admin/users', component: UserListComponent, canActivate: [AdminGuard], data: {expectedRole: 'Administrator'}}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
