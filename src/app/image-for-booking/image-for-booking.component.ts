import { Component, OnInit } from '@angular/core';
import {ImageUrl} from '../shared/model/ImageUrl';
import {ImageService} from '../shared/services/image-service';
import {AlertComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-image-for-booking',
  templateUrl: './image-for-booking.component.html',
  styleUrls: ['./image-for-booking.component.css']
})
export class ImageForBookingComponent implements OnInit {

  imgUrl:ImageUrl = null;
  error = false;
  errorMsg:string;

  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }];


  constructor(private imageService:ImageService) { }

  ngOnInit()
  {
    this.imageService.getImage(1).subscribe(i => {this.imgUrl = i; this.error = false},
      error => {this.error = true; this.errorMsg = error.error; this.alerts.push({
        class: "text-center",
        type: "danger",
        msgStrong: "Fejl!",
        msg: error.error,
        timeout: 5000
      })});
  }

  /**
   * Removes alert from alert array.
   * @param dismissedAlert The alert wanted removed.
   */
  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
