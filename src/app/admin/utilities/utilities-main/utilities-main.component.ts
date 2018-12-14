import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {AlertMessageComponent} from "../../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-utilities-main',
  templateUrl: './utilities-main.component.html',
  styleUrls: ['./utilities-main.component.css']
})
export class UtilitiesMainComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Pushes confirmation alert on success and pushes error alert on error.
   * @param obs For subscribing and checking if success or error.
   */
  alertHandler(obs: Observable<any>){
    obs.subscribe(result => {
      this.alertMessage.pushMessage("success", "Succes!", "Handling blev udført");
    }, error => {
      this.alertMessage.pushError("danger", "Fejl!", error);
    })
  }
}
