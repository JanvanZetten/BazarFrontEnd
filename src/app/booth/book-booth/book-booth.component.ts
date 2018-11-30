import { Component, OnInit } from '@angular/core';
import {BoothService} from '../../shared/services/booth.service';
import {LoginService} from '../../shared/services/login.service';
import {Booth} from '../../shared/model/booth';

@Component({
  selector: 'app-book-booth',
  templateUrl: './book-booth.component.html',
  styleUrls: ['./book-booth.component.css']
})
export class BookBoothComponent implements OnInit {
booth: Booth;
error = false;
success = false;
errorMessage: String;
  constructor(private boothService: BoothService, private loginService: LoginService) { }

  ngOnInit() {
  }

  BookBooth() {
    this.boothService.bookBooth(this.loginService.getUsername(), this.loginService.getToken()).
    subscribe(booth => {this.booth = booth, this.success = true; },
        error => {this.error = true, this.errorMessage = error.error });
  }
}
