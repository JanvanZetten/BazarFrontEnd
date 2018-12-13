import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../../shared/services/image-service';
import {FormControl, FormGroup} from '@angular/forms';
import {ImageUrl} from '../../../shared/model/ImageUrl';
import {AlertComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {

  imageForm = new FormGroup({
    id: new FormControl(''),
    url: new FormControl('')
    });

  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }]; // Array with descriped anonymous alert object.

  constructor(private imageServ: ImageService) { }

  ngOnInit() { }

  update() {
    let imageForm: any = this.imageForm.value;

    let imageUrl = new ImageUrl();
    imageUrl.id = imageForm.id;
    imageUrl.url = imageForm.url;

    this.imageServ.updateImage(imageUrl).subscribe(m => {
      this.alerts.push({
        class: "text-center",
        type: "success",
        msgStrong: "Succes!",
        msg: "Billede nyt billede til billede med id på " + m.id + ".",
        timeout: 5000
      });
    }, e => {
      this.alerts.push({
        class: "text-center",
        type: "danger",
        msgStrong: "Fejl!",
        msg: e.error,
        timeout: 5000
      });
    });
  }

  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
