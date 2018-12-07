import { Component, OnInit } from '@angular/core';
import {Booth} from "../../../shared/model/booth";
import {BoothService} from "../../../shared/services/booth.service";
import {Observable} from "rxjs";
import {AlertComponent} from "ngx-bootstrap";

@Component({
  selector: 'app-booth-list',
  templateUrl: './booth-list.component.html',
  styleUrls: ['./booth-list.component.css']
})
export class BoothListComponent implements OnInit {
  booths: Booth[]
  errorMessage: string = "Der er sket en fejl";
  confirmationMessage: string = "Handling blev udført";
  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }];

  constructor(private boothService: BoothService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.boothService.getBoothsIncludeAll().subscribe(booths => {
      this.booths = booths;
    }, error => {
      this.errorMessage = error.error;
    });
  }

  alertHandler(obs: Observable){
    obs.subscribe(result => {
      this.refresh();
      this.alerts.push({
        class: "text-center",
        type: "success",
        msgStrong: "Succes!",
        msg: this.confirmationMessage + ".",
        timeout: 5000
      });
    }, error => {
      this.refresh();
      this.alerts.push({
        class: "text-center",
        type: "danger",
        msgStrong: "Fejl!",
        msg: this.errorMessage + ".",
        timeout: 5000
      });
    })
  }

  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
