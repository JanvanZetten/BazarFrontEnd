import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";

/**
 * @input userId The id of the user wanted deleted.
 * @output deleted Event which is executed when the service is deleting the user.
 */
@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  @Input() userId: number;
  @Output() deleted = new EventEmitter();
  modalTitle; // Title for modal.
  modalBody; // Body text for modal.

  constructor(private userService: UserService) { }

  /**
   * Sets modal text.
   */
  ngOnInit() {
    this.modalTitle = "Sletning af bruger";
    this.modalBody = "Er du sikker på at du vil slette bruger " + this.userId;
  }

  /**
   * Triggers event deleted with an observable from the user service for deleting the user.
   */
  delete() {
    this.deleted.emit(this.userService.deleteUser(this.userId));
  }
}
