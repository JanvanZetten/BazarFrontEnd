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
import { CancelReservationBoothComponent } from './booth/cancel-reservation-booth/cancel-reservation-booth.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CancelWaitingPositionComponent } from './booth/cancel-waiting-position/cancel-waiting-position.component';
import { AddBoothComponent } from './admin/booth/add-booth/add-booth.component';
import { BoothListComponent } from './admin/booth/booth-list/booth-list.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { BoothDeleteComponent } from './admin/booth/booth-delete/booth-delete.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { UserDeleteComponent } from './admin/user/user-delete/user-delete.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import {JwtModule} from '@auth0/angular-jwt';
import { EditBoothComponent } from './admin/booth/edit-booth/edit-booth.component';
import { UserAddComponent } from './admin/user/user-add/user-add.component';
import { UserEditComponent } from './admin/user/user-edit/user-edit.component';
import { ImageForBookingComponent } from './image-for-booking/image-for-booking.component';
import { LogComponent } from './admin/log/log.component';
import { UpdateImageComponent } from './admin/utilities/update-image/update-image.component';
import { UtilitiesMainComponent } from './admin/utilities/utilities-main/utilities-main.component';
import { AlertMessageComponent } from './shared/alert-message/alert-message.component';
import { ResetComponent } from './admin/utilities/reset/reset.component';


export function jwtTokenGetter() {
  return 'Test';
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BookBoothComponent,
    CancelReservationBoothComponent,
    BookingComponent,
    HomeComponent,
    CreateUserComponent,
    CancelWaitingPositionComponent,
    AddBoothComponent,
    BoothListComponent,
    UserListComponent,
    UnauthorizedComponent,
    BoothDeleteComponent,
    ConfirmationModalComponent,
    UserDeleteComponent,
    EditBoothComponent,
    UserAddComponent,
    UserEditComponent,
    ImageForBookingComponent,
    LogComponent,
    UpdateImageComponent,
    UtilitiesMainComponent,
    AlertMessageComponent,
    ResetComponent
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
