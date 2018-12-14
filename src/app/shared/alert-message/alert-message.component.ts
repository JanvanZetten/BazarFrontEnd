import { Component, OnInit } from '@angular/core';
import {AlertComponent} from "ngx-bootstrap";

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

  constructor() { }

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
    let defaultMessage: string = "Der skete en fejl";
    let isErrorEmpty: boolean = error.error instanceof ProgressEvent || error === null || error.error === null;

    if(error.status === 0 && isErrorEmpty)
    {
      error.error = defaultMessage + ", intet svar fra databasen";
    }
    else if(error.status === 401 && isErrorEmpty)
    {
      error.error = defaultMessage + ", du har ikke tilstækkelig tilladelse";
    }
    else if(isErrorEmpty)
    {
      error.error = defaultMessage;
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
