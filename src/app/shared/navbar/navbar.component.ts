import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {User} from '../model/user';
import {AdminGuardService} from '../services/admin-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  constructor(private loginService: LoginService, private adminGuardService: AdminGuardService) { }

  ngOnInit() {
  }

  ifAdministrator()
  {
    return this.adminGuardService.ifAdministrator();
  }

  getTokenExists(): boolean {
    if (this.loginService.getToken())
      return true;
    else return false;
  }

}
