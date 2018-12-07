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
  errorBool = false;
  error;string;


  constructor(private boothService: BoothService) { }

  ngOnInit() {}

  addBooth() {
    let boothForm:any = this.boothForm.value;

    for (let i = 0; i < boothForm.amount; i++) {
      let booth = new Booth();
      if (boothForm.booker > 0) {
        let user = new User();
        user.id = boothForm.booker;
        booth.booker = user;
        if(this.errorBool == true)
        {
          break;
        }
      }
      this.boothService.addBooth(booth).subscribe( m =>{}, e => {this.errorBool = true, this.error = e.error});

    }
  }
}
