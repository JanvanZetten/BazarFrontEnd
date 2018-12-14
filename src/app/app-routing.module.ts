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
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {LoginService as AuthGuard} from './shared/services/login.service';
import {EditBoothComponent} from "./admin/booth/edit-booth/edit-booth.component";
import {UserAddComponent} from "./admin/user/user-add/user-add.component";
import {UserEditComponent} from "./admin/user/user-edit/user-edit.component";
import {LogComponent} from "./admin/log/log.component";
import {UtilitiesMainComponent} from './admin/utilities/utilities-main/utilities-main.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'booths', component: BookBoothComponent, canActivate: [AuthGuard]},
    {path: 'user', component: BookingComponent, canActivate: [AuthGuard]},
    {path: '', component: HomeComponent},
    {path: 'createUser', component: CreateUserComponent},
    {path: 'admin/booths', component: BoothListComponent, canActivate: [AdminGuard]},
    {path: 'admin/users', component: UserListComponent, canActivate: [AdminGuard]},
    {path: 'admin/users/add', component: UserAddComponent, canActivate: [AdminGuard]},
    {path: 'unauthorized', component:UnauthorizedComponent},
    {path: 'admin/booths/edit/:id', component: EditBoothComponent, canActivate: [AdminGuard]},
    {path: 'admin/users/edit/:id', component: UserEditComponent, canActivate: [AdminGuard]},
    {path: 'admin/log', component: LogComponent, canActivate: [AdminGuard]},
    {path: 'admin/utilities', component: UtilitiesMainComponent, canActivate: [AdminGuard]}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
