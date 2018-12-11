import { Injectable } from '@angular/core';
import {Booth} from "../model/booth";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {LoginService} from "./login.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  Url = environment.apiUrl + '/tokens';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  private setOptions() {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.loginService.getToken());
  }

  newUser(username: string, password: string): Observable<boolean>{
    return this.http.post<any>(this.Url + "/createUser", { username, password })
      .pipe(map(response => {
        const newUsername = response && response.username;

        if (newUsername) {
          this.loginService.login(username, password).subscribe(value => {
            return value;
          })
        } else {
          return false;
        }
      }));
  }

  adminNewUser(username: string, password: string, isAdmin: boolean): Observable<boolean>{
    this.setOptions();
    return this.http.post<any>(this.Url + "/createUserAdmin", { username, password, isAdmin }, httpOptions)
      .pipe(map(response => {
        const newUsername = response && response.username;

        if (newUsername) {
          return true;
        } else {
          return false;
        }
      }));
  }
}
