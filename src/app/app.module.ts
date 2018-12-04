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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BookBoothComponent,
    ShowReservationBoothComponent,
    BookingComponent,
    HomeComponent
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
    FormsModule
  ],
  providers: [BsModalService,
    ComponentLoaderFactory,
    PositioningService,
    ModalBackdropComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
