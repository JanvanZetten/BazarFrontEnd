import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AlertModule,
  BsModalService,
  ButtonsModule,
  ComponentLoaderFactory,
  ModalBackdropComponent, ModalDirective, ModalModule,
  PositioningService
} from 'ngx-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoginComponent } from './Login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookBoothComponent } from './booth/book-booth/book-booth.component';
import { ShowReservationBoothComponent } from './booth/show-reservation-booth/show-reservation-booth.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ShowWaitingPositionComponent } from './booth/show-waiting-position/show-waiting-position.component';
import { AddBoothComponent } from './admin/booth/add-booth/add-booth.component';
import { BoothListComponent } from './admin/booth/booth-list/booth-list.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { BoothDeleteComponent } from './admin/booth/booth-delete/booth-delete.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { UserDeleteComponent } from './admin/user/user-delete/user-delete.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import {JwtModule} from '@auth0/angular-jwt';


export function jwtTokenGetter() {
  return 'Test';
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BookBoothComponent,
    ShowReservationBoothComponent,
    BookingComponent,
    HomeComponent,
    CreateUserComponent,
    ShowWaitingPositionComponent,
    AddBoothComponent,
    BoothListComponent,
    UserListComponent,
    UnauthorizedComponent,
    BoothDeleteComponent,
    ConfirmationModalComponent,
    UserDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ModalModule,
    FormsModule,
    JwtModule.forRoot({config: {tokenGetter: jwtTokenGetter}})
  ],
  providers: [BsModalService,
    ComponentLoaderFactory,
    PositioningService,
    ModalBackdropComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
