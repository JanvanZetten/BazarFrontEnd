import {Component, OnInit, ViewChild} from '@angular/core';
import {BoothService} from '../shared/services/booth.service';
import {Booth} from '../shared/model/booth';
import {AlertMessageComponent} from "../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  booths:Booth[];
  numberInWaitingList = -1;
  message: string;
  constructor(private boothService: BoothService) { }

  ngOnInit() {
    this.boothService.getUsersBooking().subscribe(booths => {this.booths = booths},
      error => {this.alertMessage.push("danger", "Fejl!", error.error)});

    this.boothService.getUsersPositionInWaitingList().subscribe(
      waitingNum => {this.numberInWaitingList = waitingNum},
      error => {this.alertMessage.push("danger", "Fejl!", error.error)});
  }
}
