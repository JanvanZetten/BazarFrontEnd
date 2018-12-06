import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor() { }

  ngOnInit() {
  }

  AddLogin() {
    if (this.addUserLoginForm.get('password').value === this.addUserLoginForm.get('passwordRepeated').value){
      //take the username and the password and add login
    }

  }
}
