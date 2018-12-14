import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Booth} from '../../../shared/model/booth';
import {BoothService} from '../../../shared/services/booth.service';

@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
  styleUrls: ['./restart.component.css']
})
export class RestartComponent implements OnInit {
  @Output() restarted = new EventEmitter();
  modalTitle: string;
  modalBody: string;
  constructor(private boothService:BoothService) { }

  ngOnInit()
  {
    this.modalTitle = "Nulstil systemet";
    this.modalBody = "Er du sikker på at du vil nulstille?"
  }

  /**
   * Triggers event restarted with an observable from the restart service for restarting system.
   */
  restart() {
    // Metoden nedenunder skal udfyldes med restart all booths, fra service klassen
    this.restarted.emit();
  }

}
