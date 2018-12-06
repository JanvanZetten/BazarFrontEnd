import {Component, OnInit, TemplateRef} from '@angular/core';
import {BoothService} from '../../shared/services/booth.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-show-waiting-position',
  templateUrl: './show-waiting-position.component.html',
  styleUrls: ['./show-waiting-position.component.css']
})
export class ShowWaitingPositionComponent implements OnInit {

  message:string;
  error = false;
  success = false;
  errorMessage: String;
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
        this.message = msg, this.error = false
      this.success = true;
        this.modalRef.hide();
      },
      error => {
        if (this.error == null) {
          this.errorMessage = error.error,
            this.error = true;
        }
      });
  }
  decline() {
    this.modalRef.hide();
  }

}
