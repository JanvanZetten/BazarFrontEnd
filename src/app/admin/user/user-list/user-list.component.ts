import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/model/user";
import {UserService} from "../../../shared/services/user.service";
import {Observable} from "rxjs";
import {AlertComponent} from "ngx-bootstrap";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  errorMessage: string = "Der er sket en fejl"; // Default error message.
  confirmationMessage: string = "Handling blev udført"; // Default confirmation message.
  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }]; // Array with descriped anonymous alert object.

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

  /**
   * Pushes confirmation alert on success and pushes error alert on error.
   * @param obs For subscribing and checking if success or error.
   */
  alertHandler(obs: Observable<any>){
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

  /**
   * Removes alert from alert array.
   * @param dismissedAlert The alert wanted removed.
   */
  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
