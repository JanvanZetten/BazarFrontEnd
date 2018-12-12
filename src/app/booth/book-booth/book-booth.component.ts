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
  loading = true;
  empty = true;
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
      bs => {
        this.booths = bs;
        this.loading = false;
        this.empty = this.booths.length < 1;
      },
      error => {
        this.alerts.push({
          class: "text-center",
          type: "danger",
          msgStrong: "Fejl!",
          msg: error.error,
          timeout: 5000
        });
      });
  }

  addToBeBooked(booth: Booth) {
    this.booths = this.booths.filter(b => b !== booth);
    this.boothsToBook.push(booth);
  }

  RemoveFromtobeBooked(booth: Booth) {
    this.boothsToBook = this.boothsToBook.filter(b => b !== booth);
    this.booths.push(booth);
  }

  /**
   * Books the booths in the boothsToBook array with error handling
   * @constructor
   */
  BookBooths(){
    if(this.boothsToBook < 1){
      this.alerts.push({
        class: "text-center",
        type: "warning",
        msgStrong: "Fejl!",
        msg: "Der er ikke valgt nogle stande",
        timeout: 5000
      });
    }else{
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
  }

  /**
   * Add a user to the waitinglist with error handling
   * @constructor
   */
  AddToWaitinglist() {
    this.boothService.getOnWaitingList().subscribe(
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
