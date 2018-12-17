import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoothService} from '../../shared/services/booth.service';

@Component({
  selector: 'app-cancel-reservation-booth',
  templateUrl: './cancel-reservation-booth.component.html',
  styleUrls: ['./cancel-reservation-booth.component.css']
})
export class CancelReservationBoothComponent implements OnInit {
  @Input() boothId: number;
  @Output() canceled = new EventEmitter();
  modalTitle: string; // Title for modal.
  modalBody: string; // Body text for modal.

  constructor(private boothService: BoothService) {
  }

  ngOnInit() {
    this.modalTitle = "Annuller booking";
    this.modalBody = "Er du sikker på at du vil annullere din booking?";
  }

  cancel() {
    this.canceled.emit(this.boothService.cancelReservation(this.boothId));
  }
}
