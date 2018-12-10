import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../shared/services/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', )
  });
  error = false;
  errorMessage: String = "Der er sket en fejl"; // Default error message.
  alerts: any[] = [{
    class: "",
    type: "",
    msgStrong: "",
    msg: "",
    timeout: 1
  }]; // Array with descriped anonymous alert object.

  constructor(private loginService: LoginService, private router: Router) {
  }

  public Login(): void {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.loginService.login(username, password).subscribe(sucess => {this.router.navigate(['/']); },
      error => this.alerts.push({
        class: "text-center",
        type: "danger",
        msgStrong: "Fejl!",
        msg: error.error,
        timeout: 5000
      }));
  }

  ngOnInit() {
  }
}
