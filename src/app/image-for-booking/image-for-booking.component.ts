import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageUrl} from '../shared/model/ImageUrl';
import {ImageService} from '../shared/services/image-service';
import {AlertComponent} from 'ngx-bootstrap';
import {AlertMessageComponent} from "../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-image-for-booking',
  templateUrl: './image-for-booking.component.html',
  styleUrls: ['./image-for-booking.component.css']
})
export class ImageForBookingComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  imgUrl: ImageUrl = null;
  imgUrl2: ImageUrl = null;
  notAvailableURL: ImageUrl = new ImageUrl();


  constructor(private imageService:ImageService) { }

  ngOnInit()
  {
    this.notAvailableURL.url = "assets/img/NotAvailable.JPG";
    this.imageService.getImage(1).subscribe(i => this.imgUrl = i,
      error => this.imgUrl = this.notAvailableURL);
    this.imageService.getImage(2).subscribe(i => this.imgUrl2 = i,
      error => this.imgUrl2 = this.notAvailableURL);
  }
}
