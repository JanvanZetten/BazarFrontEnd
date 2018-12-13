import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../shared/services/login.service';
import {Router} from '@angular/router';
import {AlertMessageComponent} from "../shared/alert-message/alert-message.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', )
  });

  constructor(private loginService: LoginService, private router: Router) {
  }

  public Login(): void {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.loginService.login(username, password).subscribe(sucess => {this.router.navigate(['/']); },
      error => this.alertMessage.pushError("danger", "Fejl!", error));
  }

  ngOnInit() {
  }
}
