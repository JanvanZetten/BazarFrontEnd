import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BoothService} from '../../shared/services/booth.service';
import {Booth} from '../../shared/model/booth';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {AlertMessageComponent} from "../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-show-reservation-booth',
  templateUrl: './show-reservation-booth.component.html',
  styleUrls: ['./show-reservation-booth.component.css']
})
export class ShowReservationBoothComponent implements OnInit {
  @Input() public boothId;
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  boothBooked: Booth[];
  modalRef: BsModalRef;

  constructor(private boothService: BoothService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.boothService.getUsersBooking().subscribe(booth => this.boothBooked = booth,
        error => {
          this.alertMessage.push("danger", "Fejl!", error.error)
        });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm() {
    this.boothService.cancelReservation(this.boothId).
    subscribe(booth => {
      this.alertMessage.push("success", "Succes!", "Det lykkedes at annullere bord nummer: " + this.boothId)
      this.modalRef.hide();
    }, error => {
      this.alertMessage.push("warning", "Reservationen af standen blev ikke annulleret", error.error)
      this.modalRef.hide();
    });
  }

  decline() {
    this.modalRef.hide();
  }
}
