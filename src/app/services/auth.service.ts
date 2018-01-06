import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  private authToken: any;
  private user: any;

  private registerUrl = environment.api + 'users/register';
  private authUserUrl = environment.api + 'users/authenticate';

  constructor(private _http: HttpClient) { }

  // register
  registerUser(user){
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this._http.post(this.registerUrl, user, {headers: headers})
  .subscribe();
  }

  authUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this.authUserUrl, user, {headers: headers})
  }

  storeUserData(token, user){
      localStorage.setItem('id_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      this.authToken = token;
      this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


}
