import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {CanActivate, Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements  CanActivate{
  @Output() getLoggedIn: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient, private jwtHelper:JwtHelperService, private router:Router) {}

  canActivate():boolean
  {
    if(this.getToken())
    {
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.apiUrl + '/Tokens', { username, password })
      .pipe(map(response => {
        const token = response && response.token;
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          // return true to indicate successful login
          this.getLoggedIn.emit(true);
          return true;
        } else {
          // return false to indicate failed login
          this.getLoggedIn.emit(false);
          return false;
        }
      }));
  }

  TokenExpired(): Boolean
  {
      if(this.getToken())
      {
        if(this.jwtHelper.isTokenExpired(this.getToken()))
        {
          return true;
        }
      }
      return false;
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.getLoggedIn.emit(false);
  }

}
