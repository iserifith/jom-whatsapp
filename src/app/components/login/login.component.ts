import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _simpleNoti: NotificationsService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this._authService.authUser(user).subscribe(data => {
      if (data.success){
        this._authService.storeUserData(data.token, data.user);
        this._simpleNoti.success('', 'You are logged in!', {
          timeOut: 3000,
					showProgressBar: true,
					pauseOnHover: false,
					clickToClose: true,
        });
        this._router.navigate(['/dashboard']);
      } else {
        this._simpleNoti.error('', 'Login Failed! Check Your credentials', {
          timeOut: 3000,
					showProgressBar: true,
					pauseOnHover: false,
					clickToClose: true,
        });
      }
    });
  }

}
