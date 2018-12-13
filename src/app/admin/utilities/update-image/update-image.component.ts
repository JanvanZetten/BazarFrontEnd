import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../shared/services/image-service';
import {FormControl, FormGroup} from '@angular/forms';
import {ImageUrl} from '../../../shared/model/ImageUrl';
import {AlertComponent} from 'ngx-bootstrap';
import {AlertMessageComponent} from '../../../shared/alert-message/alert-message.component';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {

  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
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
      this.alertMessage.pushMessage("Success", "Succes!", "Billede nyt billede til billede med id på " + m.id + ".");

    }, e => {
      this.alertMessage.pushError("danger", "Fejl!", e);
    });
  }
}
