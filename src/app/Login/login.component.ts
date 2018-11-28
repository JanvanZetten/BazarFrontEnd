import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  loginMessage: String;

  constructor(private loginService: LoginService, private router: Router) {
  }

  public Login(): void {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.loginService.login(username, password).subscribe(sucess => {this.router.navigate(['/']); },
        error => {this.loginMessage = error; });
  }

  ngOnInit() {
  }
}
