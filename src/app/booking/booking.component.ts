import { Component, OnInit } from '@angular/core';
import {BoothService} from '../shared/services/booth.service';
import {Booth} from '../shared/model/booth';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  
  booths:Booth[];
  error = true;
  errorMessage: string;
  numberInWaitingList = -1;
  message: string;
  constructor(private boothService: BoothService) { }

  ngOnInit() {
    this.boothService.getUsersBooking().subscribe(booths => {this.booths = booths, this.error = false},
      error => {this.errorMessage = error.error});

    this.boothService.getUsersPositionInWaitingList().subscribe(
      waitingNum => {this.numberInWaitingList = waitingNum, this.error = false},
      error => {
        if(this.error == null){
          this.errorMessage = error.error
        }
      }
    );

  }


}
