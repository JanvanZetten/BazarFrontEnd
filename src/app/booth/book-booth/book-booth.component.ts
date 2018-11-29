import { Component, OnInit } from '@angular/core';
import {BoothService} from "../../shared/services/booth.service";
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'app-book-booth',
  templateUrl: './book-booth.component.html',
  styleUrls: ['./book-booth.component.css']
})
export class BookBoothComponent implements OnInit {


  constructor(private boothService: BoothService, private loginService: LoginService) { }

  ngOnInit() {
  }

  BookBooth() {
    this.boothService.bookBooth(this.loginService.getUsername(), this.loginService.getToken())
      ._subscribe(() -> /*Add the succes stuff here*/);
  }
}
