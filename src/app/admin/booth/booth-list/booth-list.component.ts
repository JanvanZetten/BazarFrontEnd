import { Component, OnInit } from '@angular/core';
import {Booth} from "../../../shared/model/booth";
import {BoothService} from "../../../shared/services/booth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-booth-list',
  templateUrl: './booth-list.component.html',
  styleUrls: ['./booth-list.component.css']
})
export class BoothListComponent implements OnInit {
  booths: Booth[]
  errorMessage: string = "Der er sket en fejl";
  errorOccured: boolean = false;

  constructor(private boothService: BoothService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.errorOccured = false;

    this.boothService.getBoothsIncludeAll().subscribe(booths => {
      this.booths = booths;
    }, error => {
      this.errorOccured = true;
      this.errorMessage = error.error;
    });
  }

  messageHandler(obs: Observable){
    obs.subscribe(result => {
      this.refresh();
    }, error => {
      this.refresh();
      this.errorOccured = true;
      this.errorMessage = error.error;
    })
  }
}
