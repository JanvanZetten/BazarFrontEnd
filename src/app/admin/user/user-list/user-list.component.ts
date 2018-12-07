import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/model/user";
import {UserService} from "../../../shared/services/user.service";
import {Booth} from "../../../shared/model/booth";
import {BoothService} from "../../../shared/services/booth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  errorMessage: string = "Der er sket en fejl";
  errorOccured: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.errorOccured = false;

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    }, error => {
      this.errorOccured = true;
      this.errorMessage = error.error
    });
  }

  messageHandler(obs: Observable){
    obs.subscribe(result => {
      this.refresh();
    }, error => {
      this.refresh();
      this.errorOccured = true;
      this.errorMessage = error.error;
    })
  }
}
