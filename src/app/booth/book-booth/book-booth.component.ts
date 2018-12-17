import {Component, OnInit, ViewChild} from '@angular/core';
import {BoothService} from '../../shared/services/booth.service';
import {LoginService} from '../../shared/services/login.service';
import {Booth} from '../../shared/model/booth';
import {Router} from "@angular/router";
import {AlertMessageComponent} from "../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-book-booth',
  templateUrl: './book-booth.component.html',
  styleUrls: ['./book-booth.component.css']
})
export class BookBoothComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  booth: Booth;
  booths: Booth[];
  boothsToBook: Booth[];
  loading = true;
  empty = true;
  numberOfNonBookedBooths: number;

  constructor(private boothService: BoothService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.boothService.getAvalibleBoothsCount().subscribe(count => this.numberOfNonBookedBooths = count, error => {});
    this.booths = [];
    this.boothsToBook = [];

    this.boothService.getAvalibleBooths().subscribe(
      bs => {
        this.booths = bs;
        this.loading = false;
        this.empty = this.booths.length < 1;
      },
      error => {
        this.alertMessage.pushError("danger", "Fejl!", error)
      });
  }

  addToBeBooked(booth: Booth) {
    this.booths = this.booths.filter(b => b !== booth);
    this.boothsToBook.push(booth);
  }

  RemoveFromtobeBooked(booth: Booth) {
    this.boothsToBook = this.boothsToBook.filter(b => b !== booth);
    this.booths.push(booth);
  }

  /**
   * Books the booths in the boothsToBook array with error handling
   * @constructor
   */
  BookBooths(){
    if (this.boothsToBook.length < 1){
      this.alertMessage.pushMessage("warning", "Fejl!", "Der er ikke valgt nogle stande");
    } else {
      this.boothService.bookBooths(this.boothsToBook).subscribe(
        () => this.router.navigateByUrl("/user"),
        error => this.alertMessage.pushError("danger", "Fejl!", error)
      );
    }
  }

  /**
   * Add a user to the waitinglist with error handling
   * @constructor
   */
  AddToWaitinglist() {
    this.boothService.getOnWaitingList().subscribe(
      () => this.router.navigateByUrl("/user"),
      error => this.alertMessage.pushError("danger", "Fejl!", error)
    );
  }

  /**
   * Sort list of booths by id.
   * @param list List wanted sorted.
   * @return Sorted list.
   */
  sort(list: Booth[]): Booth[]{
    return list.sort(function(a,b){
      return a.id-b.id;
    });
  }

}
