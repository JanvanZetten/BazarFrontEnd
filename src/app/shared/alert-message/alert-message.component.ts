import { Component, OnInit } from '@angular/core';
import {AlertComponent} from "ngx-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }]; // Array with described anonymous alert object.

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pushMessage(alertType: string, strongMessage: string, message: string, time: number = 5000): void {
    this.alerts.push({
      class: "text-center",
      type: alertType,
      msgStrong: strongMessage,
      msg: message,
      timeout: time
    })
  }

  pushError(alertType: string, strongMessage: string, error: any, time: number = 5000): void {
    if(error.status == 0 && error.error instanceof ProgressEvent)
    {
      error.error = "Der skete en fejl, intet svar fra databasen";
    }
    else if(error.status == 401 && error.error instanceof ProgressEvent)
    {
      error.error = "Du har ikke tilladelse";
    }
    else if(error.error instanceof ProgressEvent)
    {
      error.error = "Der skete en fejl";
    }
    this.pushMessage(alertType, strongMessage, error.error, time);
  }

  /**
   * Removes alert from alert array.
   * @param dismissedAlert The alert wanted removed.
   */
  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
