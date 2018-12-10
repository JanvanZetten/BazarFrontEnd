import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router} from '@angular/router';
import {LoginService} from './login.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private loginService: LoginService,
              private jwtHelper: JwtHelperService, private router:Router) { }

  canActivate(): boolean
  {
    const token = this.loginService.getToken();
    const tokenPayload = this.jwtHelper.decodeToken(token);
    if(tokenPayload == null)
    {
      this.router.navigate(['login']);
    }

    if(tokenPayload.role !== 'Administrator')
    {
      this.router.navigate(['unauthorized']);
      return false;
    }
    return true;
  }

  ifAdministrator()
  {
    const token = this.loginService.getToken();
    const tokenPayload = this.jwtHelper.decodeToken(token);
    if(tokenPayload == null)
    {
      return false;
    }

    if(tokenPayload.role !== 'Administrator')
    {
      this.router.navigate(['unauthorized']);
      return false;
    }
    return true;
  }
}
