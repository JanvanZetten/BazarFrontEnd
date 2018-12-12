import { Component, OnInit } from '@angular/core';
import {BoothService} from '../../shared/services/booth.service';
import {LoginService} from '../../shared/services/login.service';
import {Booth} from '../../shared/model/booth';
import {AlertComponent} from "ngx-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-booth',
  templateUrl: './book-booth.component.html',
  styleUrls: ['./book-booth.component.css']
})
export class BookBoothComponent implements OnInit {
  booth: Booth;
  booths: Booth[];
  boothsToBook: Booth[];
  error = false;
  success = false;
  errorMessage: String;
  numberOfNonbookedBooths: number;

  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }]; // Array with descriped anonymous alert object.


  constructor(private boothService: BoothService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.boothService.getAvalibleBoothsCount().subscribe(count => this.numberOfNonbookedBooths = count);
    this.booths = [];
    this.boothsToBook = [];

    this.boothService.getAvalibleBooths().subscribe(
      bs => this.booths = bs,
      error => this.alerts.push({
        class: "text-center",
        type: "danger",
        msgStrong: "Fejl!",
        msg: error.error,
        timeout: 5000
      }));

  }

  /* This should be deleted when ready but for testing this is still here.
  BookBooth() {
    this.boothService.bookBooth(this.loginService.getUsername(), this.loginService.getToken()).
    subscribe(booth => {this.booth = booth, this.success = true; },
        error => {this.error = true, this.errorMessage = error.error});
  }
  */

  addToBeBooked(booth: Booth) {
    this.booths = this.booths.filter(b => b !== booth);
    this.boothsToBook.push(booth);
  }

  RemoveFromtobeBooked(booth: Booth) {
    this.boothsToBook = this.boothsToBook.filter(b => b !== booth);
    this.booths.push(booth);
  }

  BookBooths(){
    this.boothService.bookBooths(this.boothsToBook).subscribe(
      () => this.router.navigateByUrl("/user"),
      error => this.alerts.push({
      class: "text-center",
      type: "danger",
      msgStrong: "Fejl!",
      msg: error.error,
      timeout: 5000
    }));
  }

  /**
   * Removes alert from alert array.
   * @param dismissedAlert The alert wanted removed.
   */
  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
