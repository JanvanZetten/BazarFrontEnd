import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResetService} from "../../../shared/services/reset.service";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  @Output() restarted = new EventEmitter();
  modalTitle: string;
  modalBody: string;
  constructor(private resetService:ResetService) { }

  ngOnInit()
  {
    this.modalTitle = "Nulstil systemet";
    this.modalBody = "Er du sikker på at du vil nulstille?"
  }

  /**
   * Triggers event restarted with an observable from the reset service for restarting system.
   */
  restart() {
    // Metoden nedenunder skal udfyldes med reset all booths, fra service klassen
    this.restarted.emit(this.resetService.resetSystem());
  }

}
