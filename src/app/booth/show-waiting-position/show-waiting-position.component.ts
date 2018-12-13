import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BoothService} from '../../shared/services/booth.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AlertMessageComponent} from "../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-show-waiting-position',
  templateUrl: './show-waiting-position.component.html',
  styleUrls: ['./show-waiting-position.component.css']
})
export class ShowWaitingPositionComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  modalRef: BsModalRef;

  constructor(private boothService:BoothService, private modalService:BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm()
  {
    this.boothService.cancelWaitingListPosition().subscribe(msg => {
        this.alertMessage.pushMessage("success", "Succes!", "Det lykkedes at annullere din position i ventelisten");
        this.modalRef.hide();
      },
      error => {
        this.alertMessage.pushError("warning", "Positionen blev ikke annulleret!", error)
      });
  }
  decline() {
    this.modalRef.hide();
  }

}
