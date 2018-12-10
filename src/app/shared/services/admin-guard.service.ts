import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {LoginService} from './login.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private loginService: LoginService,
              private jwtHelper: JwtHelperService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = this.loginService.getToken();
    const tokenPayload = this.jwtHelper.decodeToken(token);

    console.log(tokenPayload.role);
    return true;
  }
}
