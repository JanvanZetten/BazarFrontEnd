import {Component, OnInit, ViewChild} from '@angular/core';
import {Booth} from "../../../shared/model/booth";
import {ActivatedRoute, Router} from "@angular/router";
import {BoothService} from "../../../shared/services/booth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../../shared/model/user";
import {Observable} from "rxjs";
import {AlertComponent} from "ngx-bootstrap";
import {AlertMessageComponent} from "../../../shared/alert-message/alert-message.component";

@Component({
  selector: 'app-edit-booth',
  templateUrl: './edit-booth.component.html',
  styleUrls: ['./edit-booth.component.css']
})
export class EditBoothComponent implements OnInit {
  @ViewChild('alertMessage') alertMessage: AlertMessageComponent;
  id: number;
  booth: Booth;
  boothForm = new FormGroup({
    booker: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private boothService: BoothService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.boothService.getBooth(this.id).subscribe(
      booth => {this.booth = booth;
        if(this.booth.booker != null)
        {
          this.boothForm.patchValue(
            {booker: this.booth.booker.id}
          )
        }
      }
    );
  }

  editBooth() {
    var user = new User();
    user.id = this.boothForm.value.booker;
    this.booth.booker = user;
    this.boothService.updateBooth(this.booth).subscribe(
      () => this.router.navigateByUrl('admin/booths'),
      error => this.alertMessage.pushError("danger", "Fejl!", error)
    );
  }
}
