import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';
import {Booth} from '../model/booth';
import {environment} from '../../../environments/environment';
import {ImageUrl} from '../model/ImageUrl';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})



export class ImageService {

  Url = environment.apiUrl + '/ImageUrl';

  constructor(private authenticationService:LoginService, private http:HttpClient) { }

  private setOptions()
  {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
  }

  getImageUrls(): Observable<ImageUrl[]>{
    this.setOptions();
    return this.http.get<ImageUrl[]>(this.Url, httpOptions);
  }

  getImage(id: number): Observable<ImageUrl>{
    this.setOptions();
    return this.http.get<ImageUrl>(this.Url + "/" + id, httpOptions);
  }

  addImage(imageUrl: ImageUrl): Observable<ImageUrl>{
    this.setOptions();
    return this.http.post<ImageUrl>(this.Url, imageUrl, httpOptions);
  }

  updateImage(imageUrl: ImageUrl): Observable<ImageUrl> {
    this.setOptions();
    return this.http.put<ImageUrl>(this.Url + '/' + imageUrl.id, imageUrl, httpOptions);
  }

  deleteImage(id: number): Observable<ImageUrl> {
    this.setOptions();
    return this.http.delete<ImageUrl>(this.Url + '/' + id, httpOptions);
  }
}
