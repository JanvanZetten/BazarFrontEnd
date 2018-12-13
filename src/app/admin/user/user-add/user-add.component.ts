import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "../../../shared/services/register.service";
import {Router} from "@angular/router";
import {AlertComponent} from "ngx-bootstrap";
import {AlertMessageComponent} from "../../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordRepeated: new FormControl(''),
    isAdmin: new FormControl('')
  });

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    if (this.userForm.get('password').value === this.userForm.get('passwordRepeated').value){
      if (this.userForm.get('password').value !== null && this.userForm.get('username').value !== null) {
        this.registerService.adminNewUser(this.userForm.get('username').value, this.userForm.get('password').value, this.userForm.get('isAdmin').value ? true : false)
          .subscribe(() => {
              this.router.navigate(['/admin/users']);
            },
            error => {
              this.alertMessage.push(true, error.error);
            });
      }
      else {
        this.alertMessage.push(true, "Der skal være både brugernavn og kodeord");
      }
    }
    else {
      this.alertMessage.push(true, "De to kodeord er ikke ens");
    }
  }
}
