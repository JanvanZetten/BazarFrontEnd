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
  Url = environment.apiUrl + '/tokens/createuser';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  newUser(username: string, password: string): Observable<boolean>{
    return this.http.post<any>(this.Url, { username, password })
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
}
