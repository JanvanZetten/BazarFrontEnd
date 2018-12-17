import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {BoothService} from '../../shared/services/booth.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AlertMessageComponent} from "../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-cancel-waiting-position',
  templateUrl: './cancel-waiting-position.component.html',
  styleUrls: ['./cancel-waiting-position.component.css']
})
export class CancelWaitingPositionComponent implements OnInit {
  @Input() boothId: number;
  @Output() canceled = new EventEmitter();
  modalTitle: string; // Title for modal.
  modalBody: string; // Body text for modal.

  constructor(private boothService: BoothService) {
  }

  ngOnInit() {
    this.modalTitle = "Annuller position";
    this.modalBody = "Er du sikker på at du vil annullere din position?";
  }

  cancel() {
    this.canceled.emit(this.boothService.cancelWaitingListPosition());
  }
}
