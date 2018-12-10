import { Injectable } from '@angular/core';
import {CanActivate, Route, Router} from '@angular/router';
import {LoginService} from './login.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private loginService: LoginService,
              private jwtHelper: JwtHelperService, private router:Router) { }

  // If user is an admin, he can access admin sites.
  // Checking if the token has "administrator" in role.
  canActivate(): boolean
  {
    const token = this.loginService.getToken();
    const tokenPayload = this.jwtHelper.decodeToken(token);
    if(tokenPayload == null)
    {
      this.router.navigate(['login']);
    }

    if(tokenPayload.role !== 'Administrator'|| !this.loginService.getToken())
    {
      this.router.navigate(['unauthorized']);
      return false;
    }
    return true;
  }

  // Check if user is an administrator, is used in navbar whether to show "admin" or not.
  ifAdministrator()
  {
    const token = this.loginService.getToken();
    const tokenPayload = this.jwtHelper.decodeToken(token);
    if(tokenPayload == null)
    {
      return false;
    }

    if(tokenPayload.role !== 'Administrator' || !this.loginService.getToken())
    {
      return false;
    }
    return true;
  }
}
