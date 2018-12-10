import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "../../../shared/services/register.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BoothService} from "../../../shared/services/booth.service";
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/model/user";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: number;
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordRepeated: new FormControl(''),
    isAdmin: new FormControl('')
  });
  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }]; // Array with descriped anonymous alert object.

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(
      user => {
        this.userForm.patchValue({
            username: user.username
        })
      }
    );
  }

  addUser() {
    if (this.userForm.get('password').value === this.userForm.get('passwordRepeated').value){
      if (this.userForm.get('password').value !== null && this.userForm.get('username').value !== null) {
        var tmp: User = {
          id: this.id,
          username: this.userForm.get('username').value,
          isAdmin: this.userForm.get('isAdmin').value ? true : false
        };
        this.userService.updateUser(tmp)
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
