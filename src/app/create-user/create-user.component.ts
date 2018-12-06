import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "../shared/services/register.service";
import {Router} from "@angular/router";

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

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  AddLogin() {
    if (this.addUserLoginForm.get('password').value === this.addUserLoginForm.get('passwordRepeated').value){
      if (this.addUserLoginForm.get('password').value !== null && this.addUserLoginForm.get('username').value !== null) {
        this.registerService.newUser(this.addUserLoginForm.get('username').value, this.addUserLoginForm.get('password').value)
          .subscribe(() => {
              this.router.navigate(['/']);
            },
            error => {
              this.errorMessage = error.error, this.error = true,
                console.log(error);
            });
      }
      else {
        this.errorMessage = "Der skal være både brugernavn og kodeord";
        this.error = true;
      }
    }
    else{
      this.errorMessage = "De to kodeord er ikke ens";
      this.error = true;
    }

  }
}
