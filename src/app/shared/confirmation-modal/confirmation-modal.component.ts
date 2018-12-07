import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Output() confirmed = new EventEmitter();
  @ViewChild('template') template;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public open(){
    this.modalRef = this.modalService.show(this.template);
  }

  confirm() {
    console.log("Modal confirm");
    this.confirmed.emit(true);
    this.modalRef.hide();
  }

  decline() {
    this.modalRef.hide();
  }
}
