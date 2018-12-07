import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/model/user";
import {UserService} from "../../../shared/services/user.service";
import {Booth} from "../../../shared/model/booth";
import {BoothService} from "../../../shared/services/booth.service";
import {Observable} from "rxjs";
import {AlertComponent} from "ngx-bootstrap";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  errorMessage: string = "Der er sket en fejl";
  confirmationMessage: string = "Handling blev udført";
  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    }, error => {
      this.errorMessage = error.error
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
