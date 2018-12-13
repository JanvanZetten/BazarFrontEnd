import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Booth} from "../model/booth";
import {LogItem} from "../model/log";

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

  public getLogItems(): Observable<LogItem[]> {
    this.setOptions();
    return this.http.get<LogItem[]>(this.Url, httpOptions);
  }
}
