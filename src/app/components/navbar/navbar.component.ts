import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _simpleNoti: NotificationsService
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this._authService.logOut();
    this._simpleNoti.warn('You are logged out', '', {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: false,
      clickToClose: true,
    });
    this._router.navigate(['/login']);
    return false;
  }

}
