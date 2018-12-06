import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "../shared/services/register.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  addUserLoginForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
  passwordRepeated: new FormControl('')
});
  error = false;
  errorMessage: String;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  AddLogin() {
    if (this.addUserLoginForm.get('password').value === this.addUserLoginForm.get('passwordRepeated').value){
      this.registerService.newUser(this.addUserLoginForm.get('username').value, this.addUserLoginForm.get('password').value);
    }

  }
}
