import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Booth} from "../model/booth";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LogService {
  Url = environment.apiUrl + '/booths';

  constructor(private http: HttpClient, private authenticationService: LoginService) { }

  private setOptions() {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
  }

  getBooths(): Observable<Booth[]> {
    this.setOptions();
    return this.http.get<Booth[]>(this.Url, httpOptions);
  }
}
