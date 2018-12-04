import { Component, OnInit } from '@angular/core';
import {BoothService} from '../shared/services/booth.service';
import {Booth} from '../shared/model/booth';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booth: Booth;
  error = true;
  errorMessage: String;
  constructor(private boothService: BoothService) { }

  ngOnInit() {
    this.boothService.getUsersBooking().subscribe(o => (this.booth = o, this.error = false),
      error => {this.error = true, this.errorMessage = error.error});
  }



}
