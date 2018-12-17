import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {User} from '../model/user';
import {AdminGuardService} from '../services/admin-guard.service';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  loginStatus:string;

  constructor(private loginService: LoginService,
              private adminGuardService: AdminGuardService,
              private router:Router) { }

  ngOnInit()
  {
    if(this.getTokenExists())
    {
      this.loginStatus = 'Log Out'
    }
    else
    {
      this.loginStatus = 'Login'
    }
  }

  ifAdministrator()
  {
    return this.adminGuardService.ifAdministrator();
  }

  Logout()
  {
    if(this.loginService.getToken() && !this.loginService.TokenExpired())
    {
      this.loginService.logout();
      this.loginStatus = 'Login'
    }
    else
    {
      this.loginService.logout();
      this.router.navigate(['/login']);
    }
  }


  getTokenExists(): boolean {
    if (this.loginService.getToken())
      return true;
    else return false;
  }

}
