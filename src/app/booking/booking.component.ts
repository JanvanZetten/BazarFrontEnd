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
  constructor(private boothService: BoothService) { }

  ngOnInit() {
    this.boothService.getUsersBooking();
  }

}
