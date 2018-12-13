import {Component, OnInit, ViewChild} from '@angular/core';
import {LogItem} from "../../shared/model/log";
import {LogService} from "../../shared/services/log.service";
import {AlertMessageComponent} from "../../shared/alert-message/alert-message.component";

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
  }

  private getAllLogs() {
    this.logService.getLogItems().subscribe(
      ls => this.logItems = ls,
      error => this.alertMessage.pushError("danger", "Fejl!", error)
    );
  }
}
