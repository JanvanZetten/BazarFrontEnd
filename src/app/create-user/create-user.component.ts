import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "../shared/services/register.service";
import {Router} from "@angular/router";
import {AlertMessageComponent} from "../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  addUserLoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordRepeated: new FormControl('')
  });

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
              this.alertMessage.pushError("danger", "Fejl!", error);
            });
      }
      else {
        this.alertMessage.pushMessage("danger", "Fejl!", "Der skal være både brugernavn og kodeord");
      }
    }
    else{
      this.alertMessage.pushMessage("danger", "Fejl!", "De to kodeord er ikke ens");
    }

  }
}
