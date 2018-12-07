import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  @Input() userId: number;
  @Output() deleted = new EventEmitter();
  modalTitle;
  modalBody;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.modalTitle = "Sletning af bruger";
    this.modalBody = "Er du sikker på at du vil slette bruger " + this.userId;
  }

  delete() {
    this.deleted.emit(this.userService.deleteUser(this.userId));
  }
}
