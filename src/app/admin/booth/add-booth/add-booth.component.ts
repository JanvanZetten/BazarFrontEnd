import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BoothService} from '../../../shared/services/booth.service';
import {Booth} from '../../../shared/model/booth';
import {User} from '../../../shared/model/user';

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
  errorBool = false;
  error: string;
  maxAmountOfBoothsAllowed = 1000;

  errorMessage: string = "Der er sket en fejl"; // Default error message.
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
        msg: "Der må maks laves " + this.maxAmountOfBoothsAllowed + " nye stande ad gangen.",
        timeout: 5000
    })
    }
    else {
      let booth = new Booth();
      if (boothForm.booker > 0) {
        let user = new User();
        user.id = boothForm.booker;
        booth.booker = user;
      }

      this.boothService.addBooth(boothForm.amount, booth).subscribe(
        m => {}, e => {
          this.errorBool = true;
          this.error = e.error
        });
    }
  }
}
