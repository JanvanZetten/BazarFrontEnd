import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../shared/model/user";
import {UserService} from "../../../shared/services/user.service";
import {Observable} from "rxjs";
import {AlertComponent} from "ngx-bootstrap";
import {AlertMessageComponent} from "../../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    }, error => {
      this.alertMessage.push("danger", "Fejl!", error.error)
    });
  }

  /**
   * Pushes confirmation alert on success and pushes error alert on error.
   * @param obs For subscribing and checking if success or error.
   */
  alertHandler(obs: Observable<any>){
    obs.subscribe(result => {
      this.refresh();
      this.alertMessage.push("success", "Succes!", "Handling blev udført");
    }, error => {
      this.refresh();
      this.alertMessage.push("danger", "Fejl!", error.error);
    })
  }
}
