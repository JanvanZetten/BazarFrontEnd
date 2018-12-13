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
    this.modalTitle = "Genstart standernes lejere";
    this.modalBody = "Er du sikker på, at du vil fjerne lejere?"
  }

  /**
   * Triggers event deleted with an observable from the booth service for deleting the booth.
   */
  restart() {
    // Metoden nedenunder skal udfyldes med restart all booths, fra service klassen
    this.restarted.emit();
  }

}
