import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BoothService} from '../../../shared/services/booth.service';
import {Booth} from '../../../shared/model/booth';
import {User} from '../../../shared/model/user';

@Component({
  selector: 'app-add-booth',
  templateUrl: './add-booth.component.html',
  styleUrls: ['./add-booth.component.css']
})
export class AddBoothComponent implements OnInit {

  boothForm = new FormGroup({
    amount: new FormControl(1),
    booker: new FormControl('')
  });


  constructor(private boothService: BoothService) { }

  ngOnInit() {}

  addBooth() {
    let amount = this.boothForm.get('amount').value;
    let booker = this.boothForm.get('booker').value;

    for (let i = 0; i < amount; i++) {
      let booth = new Booth();
      if (booker > 0) {
        let user = new User();
        user.id = booker;
        booth.booker = user;
      }
      this.boothService.addBooth(booth).subscribe();
    }
  }
}
