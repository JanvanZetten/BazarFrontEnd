import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoothService} from "../../../shared/services/booth.service";

@Component({
  selector: 'app-booth-delete',
  templateUrl: './booth-delete.component.html',
  styleUrls: ['./booth-delete.component.css']
})
export class BoothDeleteComponent implements OnInit {
  @Input() boothId: number;
  @Output() deleted = new EventEmitter();
  modalTitle;
  modalBody;

  constructor(private boothService: BoothService) { }

  ngOnInit() {
    this.modalTitle = "Sletning af stand";
    this.modalBody = "Er du sikker på at du vil slette stand " + this.boothId;
  }

  delete() {
    this.deleted.emit(this.boothService.deleteBooth(this.boothId));
  }
}
