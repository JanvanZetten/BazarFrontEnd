import { Component, OnInit } from '@angular/core';
import {Booth} from "../../../shared/model/booth";
import {BoothService} from "../../../shared/services/booth.service";

@Component({
  selector: 'app-booth-list',
  templateUrl: './booth-list.component.html',
  styleUrls: ['./booth-list.component.css']
})
export class BoothListComponent implements OnInit {
  booths: Booth[]
  errorMessage: string = "Der er sket en fejl";

  constructor(private boothService: BoothService) { }

  ngOnInit() {
    this.boothService.getBoothsIncludeAll().subscribe(booths => {
      this.booths = booths;
    }, error => {
      this.errorMessage = error.error;
    });
  }

}
