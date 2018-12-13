import {Component, OnInit, ViewChild} from '@angular/core';
import {Booth} from "../../../shared/model/booth";
import {BoothService} from "../../../shared/services/booth.service";
import {Observable} from "rxjs";
import {AlertComponent} from "ngx-bootstrap";
import {AlertMessageComponent} from "../../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-booth-list',
  templateUrl: './booth-list.component.html',
  styleUrls: ['./booth-list.component.css']
})
export class BoothListComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  booths: Booth[]

  constructor(private boothService: BoothService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.boothService.getBoothsIncludeAll().subscribe(booths => {
      this.booths = booths;
    }, error => {
      this.alertMessage.push("danger", "Fejl!", error.error);
    });
  }

  /**
   * Pushes confirmation alert on success and pushes error alert on error.
   * @param obs For subscribing and checking if success or error.
   */
  alertHandler(obs: Observable<any>){
    obs.subscribe(result => {
      this.refresh();
      this.alertMessage.push("success", "Succes!", "Handling blev udført");
    }, error => {
      this.refresh();
      this.alertMessage.push("danger", "Fejl!", error.error);
    })
  }
}
