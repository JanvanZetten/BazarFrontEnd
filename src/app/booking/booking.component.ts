import {Component, OnInit, ViewChild} from '@angular/core';
import {BoothService} from '../shared/services/booth.service';
import {Booth} from '../shared/model/booth';
import {AlertMessageComponent} from "../shared/alert-message/alert-message.component";
import {Observable} from "rxjs";

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
    this.refresh();
  }

  refresh() {
    this.booths = undefined;
    this.numberInWaitingList = -1;
    this.boothService.getUsersBooking().subscribe(booths => {this.booths = booths},
      error => {
        this.boothService.getUsersPositionInWaitingList().subscribe(
          waitingNum => {this.numberInWaitingList = waitingNum},
          error2 => {});
      });
  }

  alertHandler(obs: Observable<any>){
    obs.subscribe(result => {
      this.refresh();
      this.alertMessage.pushMessage("success", "Succes!", "Handling blev udført");
    }, error => {
      this.refresh();
      this.alertMessage.pushError("danger", "Fejl!", error);
    })
  }
}
