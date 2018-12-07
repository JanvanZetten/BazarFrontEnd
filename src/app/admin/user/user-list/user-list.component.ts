import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/model/user";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => this.errorMessage = error.error
    );
  }

}
