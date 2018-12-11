import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BoothService} from '../../../shared/services/booth.service';
import {Booth} from '../../../shared/model/booth';
import {User} from '../../../shared/model/user';
import {AlertComponent} from "ngx-bootstrap";

@Component({
  selector: 'app-add-booth',
  templateUrl: './add-booth.component.html',
  styleUrls: ['./add-booth.component.css']
})
export class AddBoothComponent implements OnInit {

  boothForm = new FormGroup({
    amount: new FormControl(1),
    booker: new FormControl('')
  });
  maxAmountOfBoothsAllowed = 1000;
  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }]; // Array with descriped anonymous alert object.

  constructor(private boothService: BoothService) { }

  ngOnInit() {}

  addBooth() {
    let boothForm:any = this.boothForm.value;

    if(boothForm.amount > this.maxAmountOfBoothsAllowed) {
      this.alerts.push({
        class: "text-center",
        type: "danger",
        msgStrong: "Fejl!",
        msg: "Et maximum af " + this.maxAmountOfBoothsAllowed + " stande kan blive lavet ad gangen.",
        timeout: 5000
      });
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
          this.alerts.push({
            class: "text-center",
            type: "success",
            msgStrong: "Succes!",
            msg: "Tilføjede " + m.length + " " + (m.length > 1 ? "stande" : "stand") + " til systemet",
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
  }

  /**
   * Removes alert from alert array.
   * @param dismissedAlert The alert wanted removed.
   */
  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
