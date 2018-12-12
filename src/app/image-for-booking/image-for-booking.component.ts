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

  imgUrl: ImageUrl = null;
  imgUrl2: ImageUrl = null;
  notAvailableURL: ImageUrl = new ImageUrl();
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
    this.notAvailableURL.url = "assets/img/NotAvailable.JPG";
    this.imageService.getImage(1).subscribe(i => this.imgUrl = i,
      error => this.imgUrl = this.notAvailableURL);
    this.imageService.getImage(2).subscribe(i => this.imgUrl2 = i,
      error => this.imgUrl2 = this.notAvailableURL);
  }

  /**
   * Removes alert from alert array.
   * @param dismissedAlert The alert wanted removed.
   */
  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
