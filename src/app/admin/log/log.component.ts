import {Component, OnInit, ViewChild} from '@angular/core';
import {LogItem} from "../../shared/model/log";
import {LogService} from "../../shared/services/log.service";
import {AlertMessageComponent} from "../../shared/alert-message/alert-message.component";
import {User} from "../../shared/model/user";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  logItems: LogItem[];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getAllLogs();

    /* Test Data
    this.logItems = [];
    for (var _i = 0; _i < 20; _i++) {
      let newLog = new LogItem();
      let newUser = new User();
      newUser.id = 10;
      newUser.username = 'Alex';

      newLog.id = _i;
      newLog.message = "some messages like Alex has booked a booth for 5000,- DKR."
      newLog.user = newUser;
      newLog.date = Date.now();
      this.logItems.push(newLog);

    }
    */
  }

  private getAllLogs() {
    this.logService.getLogItems().subscribe(
      ls => this.logItems = ls,
      error => this.alertMessage.pushError("danger", "Fejl!", error)
    );
  }
}
