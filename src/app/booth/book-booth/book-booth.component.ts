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
booths: Booth[];
boothsToBook: Booth[];
error = false;
success = false;
errorMessage: String;
numberOfNonbookedBooths: number;


  constructor(private boothService: BoothService, private loginService: LoginService) { }

  ngOnInit() {
    this.boothService.getAvalibleBoothsCount().subscribe(count => this.numberOfNonbookedBooths = count);
    this.booths = [];
    this.boothsToBook = [];
    for (var _i = 1; _i < 20; _i++) {
      let booth = new Booth();
      booth.id = _i;
      this.booths.push(booth);
    }
  }

  BookBooth() {
    this.boothService.bookBooth(this.loginService.getUsername(), this.loginService.getToken()).
    subscribe(booth => {this.booth = booth, this.success = true; },
        error => {this.error = true, this.errorMessage = error.error});
  }

  addToBeBooked(booth: Booth) {
    this.booths = this.booths.filter(b => b !== booth);
    this.boothsToBook.push(booth);
  }

  RemoveFromtobeBooked(booth: Booth) {
    this.boothsToBook = this.boothsToBook.filter(b => b !== booth);
    this.booths.push(booth);
  }
}
