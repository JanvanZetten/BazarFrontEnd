import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Login/login.component';
import {BookBoothComponent} from "./booth/book-booth/book-booth.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'booths', component: BookBoothComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
