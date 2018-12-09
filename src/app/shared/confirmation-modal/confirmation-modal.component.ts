import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

/**
 * @desc This component is used to make a confirmation modal.
 * @input {String} title The title of the modal.
 * @input {String} body The text in the modal.
 * @output {Event} confirmed Triggered when the user press on 'Ja' button.
 */
@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Output() confirmed = new EventEmitter();
  @ViewChild('template') template; // Gets the element with a the tag template '#template' in the html file.
  modalRef: BsModalRef;

  /**
   * @param modalService Creates modals for NGX-Bootstrap.
   */
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  /**
   * Shows new modal view the template from .html and saves the reference.
   */
  public open(){
    this.modalRef = this.modalService.show(this.template);
  }

  /**
   * Trigger event confirmed with the value true.
   * Hides the modal.
   */
  confirm() {
    this.confirmed.emit(true);
    this.modalRef.hide();
  }

  /**
   * Hides the modal.
   */
  decline() {
    this.modalRef.hide();
  }
}
