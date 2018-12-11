import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Url = environment.apiUrl + '/users';

  constructor(private http: HttpClient, private authenticationService: LoginService) { }

  private setOptions() {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
  }

  getUsers(): Observable<User[]>{
    this.setOptions();
    return this.http.get<User[]>(this.Url, httpOptions);
  }

  getUser(id: number): Observable<User>{
    this.setOptions();
    return this.http.get<User>(this.Url + "/" + id, httpOptions);
  }

  updateUser(newUser: User): Observable<User>{
    this.setOptions();
    return this.http.put<User>(this.Url + "/" + newUser.id, newUser, httpOptions);
  }
  
  deleteUser(id: number): Observable<User>{
    this.setOptions();
    return this.http.delete<User>(this.Url + "/" + id, httpOptions);
  }

}
