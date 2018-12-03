import { Component, OnInit, TemplateRef } from '@angular/core';
import {BoothService} from '../../shared/services/booth.service';
import {LoginService} from '../../shared/services/login.service';
import {Booth} from '../../shared/model/booth';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-show-reservation-booth',
  templateUrl: './show-reservation-booth.component.html',
  styleUrls: ['./show-reservation-booth.component.css']
})
export class ShowReservationBoothComponent implements OnInit {
  boothBooked: Booth;
  error = false;
  success = false;
  errorMessage: String;
  modalRef: BsModalRef;

  constructor(private boothService: BoothService, private loginService: LoginService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.boothService.getUserReservation(this.loginService.getToken()).subscribe(booth => this.boothBooked = booth);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm()
  {
    this.boothService.cancelReservation(this.boothBooked.id, this.loginService.getToken()).
    subscribe(booth => { this.success = true; this.modalRef.hide();},
      error => { this.error = true; this.errorMessage = error.error; this.modalRef.hide();});

  }

  decline()
  {
    this.modalRef.hide();
  }
}
