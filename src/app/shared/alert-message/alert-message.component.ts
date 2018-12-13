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

  push(alertType: string, strongMessage: string, message: string, time: number = 5000): void {
    this.alerts.push({
      class: "text-center",
      type: alertType,
      msgStrong: strongMessage,
      msg: message,
      timeout: time
    })
  }

  /**
   * Removes alert from alert array.
   * @param dismissedAlert The alert wanted removed.
   */
  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
