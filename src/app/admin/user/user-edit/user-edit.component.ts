import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "../../../shared/services/register.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BoothService} from "../../../shared/services/booth.service";
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/model/user";
import {AlertMessageComponent} from "../../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  id: number;
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordRepeated: new FormControl(''),
    isAdmin: new FormControl('')
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(
      user => {
        this.userForm.patchValue({
            username: user.username,
            isAdmin: user.isAdmin
        })
      }
    );
  }

  editUser() {
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
              this.alertMessage.pushError("danger", "Fejl!", error)
            });
      }
      else {
        this.alertMessage.pushMessage("danger", "Fejl!", "Der skal være både brugernavn og kodeord");
      }
    }
    else {
      this.alertMessage.pushMessage("danger", "Fejl!", "De to kodeord er ikke ens");
    }
  }
}
