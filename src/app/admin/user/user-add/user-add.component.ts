import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "../../../shared/services/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordRepeated: new FormControl('')
  });
  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }]; // Array with descriped anonymous alert object.

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    if (this.userForm.get('password').value === this.userForm.get('passwordRepeated').value){
      if (this.userForm.get('password').value !== null && this.userForm.get('username').value !== null) {
        this.registerService.newUser(this.userForm.get('username').value, this.userForm.get('password').value)
          .subscribe(() => {
              this.router.navigate(['/admin/users']);
            },
            error => {
              this.alerts.push({
                class: "text-center",
                type: "danger",
                msgStrong: "Fejl!",
                msg: error.error,
                timeout: 5000
              });
            });
      }
      else {
        this.alerts.push({
          class: "text-center",
          type: "danger",
          msgStrong: "Fejl!",
          msg: "Der skal være både brugernavn og kodeord",
          timeout: 5000
        });
      }
    }
    else {
      this.alerts.push({
        class: "text-center",
        type: "danger",
        msgStrong: "Fejl!",
        msg: "De to kodeord er ikke ens",
        timeout: 5000
      });
    }
  }
}
