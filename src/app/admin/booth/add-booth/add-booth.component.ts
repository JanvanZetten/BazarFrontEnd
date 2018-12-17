import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BoothService} from '../../../shared/services/booth.service';
import {Booth} from '../../../shared/model/booth';
import {User} from '../../../shared/model/user';
import {AlertComponent} from "ngx-bootstrap";
import {AlertMessageComponent} from "../../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-add-booth',
  templateUrl: './add-booth.component.html',
  styleUrls: ['./add-booth.component.css']
})
export class AddBoothComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  @Output() added = new EventEmitter();
  boothForm = new FormGroup({
    amount: new FormControl(1),
    booker: new FormControl('')
  });
  maxAmountOfBoothsAllowed = 1000;

  constructor(private boothService: BoothService) { }

  ngOnInit() {}

  addBooth() {
    let boothForm:any = this.boothForm.value;

    if(boothForm.amount > this.maxAmountOfBoothsAllowed) {
      this.alertMessage.pushMessage("danger", "Fejl!", "Et maximum af " + this.maxAmountOfBoothsAllowed + " stande kan blive lavet ad gangen.");
    }
    else {
      let booth = new Booth();
      if (boothForm.booker > 0) {
        let user = new User();
        user.id = boothForm.booker;
        booth.booker = user;
      }

      this.boothService.addBooth(boothForm.amount, booth).subscribe(
        m => {
          this.added.emit();
          this.alertMessage.pushMessage("success", "Succes!", "Tilføjede " + m.length + " " + (m.length > 1 ? "stande" : "stand") + " til systemet");
          }, error => {
          this.added.emit();
          this.alertMessage.pushError("danger", "Fejl!", error);
        });
    }
  }
}
