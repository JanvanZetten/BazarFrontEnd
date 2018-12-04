import { Injectable } from '@angular/core';
import {LoginService} from "./login.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
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
export class BoothService {
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

  getBooth(id: number): Observable<Booth>{
    this.setOptions();
    return this.http.get<Booth>(this.Url + "/" + id, httpOptions);
  }

  addBooth(booth: Booth): Observable<Booth>{
    this.setOptions();
    return this.http.post<Booth>(this.Url, booth, httpOptions);
  }

  updateBooth(booth: Booth): Observable<Booth> {
    this.setOptions();
    return this.http.put<Booth>(this.Url + '/' + booth.id, booth, httpOptions);
  }

  deleteBooth(id: number): Observable<Booth> {
    this.setOptions();
    return this.http.delete<Booth>(this.Url + '/' + id, httpOptions);
  }

  bookBooth(userName: string, token: string): Observable<Booth> {
    this.setOptions();
    return this.http.post<Booth>(this.Url + '/book',"\"" + token + "\"", httpOptions);
  }

  getUsersBooking(): Observable<Booth> {
    this.setOptions();
    return this.http.post<Booth>(this.Url + '/usersBooking', "\"" + this.authenticationService.getToken() + "\"", httpOptions);
  }

  getAvalibleBoothsCount(): Observable<number>{
    this.setOptions();
    return this.http.get<number>(this.Url + '/availableCount', httpOptions);
  }
}
