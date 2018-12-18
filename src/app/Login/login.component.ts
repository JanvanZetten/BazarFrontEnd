import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../shared/services/login.service';
import {Router} from '@angular/router';
import {AlertMessageComponent} from "../shared/alert-message/alert-message.component";
import {NavbarComponent} from "../shared/navbar/navbar.component";


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

  constructor(private loginService: LoginService, private router: Router, private navbarcomponent: NavbarComponent) {
  }

  public Login(): void {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.loginService.login(username, password).subscribe(sucess => {this.router.navigate(['/']); this.navbarcomponent.refreshLoginStatus() },
      error => this.alertMessage.pushError("danger", "Fejl!", error));
  }

  ngOnInit() {
  }
}
