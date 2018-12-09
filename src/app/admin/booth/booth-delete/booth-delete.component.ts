import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoothService} from "../../../shared/services/booth.service";

/**
 * @input boothId The id of the booth wanted deleted.
 * @output deleted Event which is executed when the service is deleting the booth.
 */
@Component({
  selector: 'app-booth-delete',
  templateUrl: './booth-delete.component.html',
  styleUrls: ['./booth-delete.component.css']
})
export class BoothDeleteComponent implements OnInit {
  @Input() boothId: number;
  @Output() deleted = new EventEmitter();
  modalTitle: string; // Title for modal.
  modalBody: string; // Body text for modal.

  constructor(private boothService: BoothService) { }

  /**
   * Sets modal text.
   */
  ngOnInit() {
    this.modalTitle = "Sletning af stand";
    this.modalBody = "Er du sikker på at du vil slette stand " + this.boothId;
  }

  /**
   * Triggers event deleted with an observable from the booth service for deleting the booth.
   */
  delete() {
    this.deleted.emit(this.boothService.deleteBooth(this.boothId));
  }
}
