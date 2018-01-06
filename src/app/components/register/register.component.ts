import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { NotificationsService } from 'angular2-notifications';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;
  user: String;
  authToken: any;

  constructor(
    private _authService: AuthService,
    private _validateService: ValidateService,
    private _simpleNoti: NotificationsService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if (!this._validateService.validateRegister(user)){
      this._simpleNoti.error('Please fill in all fields!', '', {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
      });
      return false;
    } else {
      this._authService.registerUser(user);
      this._router.navigate(['/']);
    }
  }




}
