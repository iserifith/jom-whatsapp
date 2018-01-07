import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Http, Headers} from '@angular/http'; // temporary
import { environment } from '../../environments/environment';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  username: string;

  private registerUrl = environment.api + 'users/register';
  private authUserUrl = environment.api + 'users/authenticate';

  constructor(private _http: HttpClient, private http: Http ) { }

  // register
  registerUser(user){
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this._http.post(this.registerUrl, user, {headers: headers})
  .subscribe();
  }

  // authUser(user){
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this._http.post(this.authUserUrl, user, {headers: headers})
  // }

  authUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.authUserUrl, user, {headers: headers})
    .map(res => res.json());
  }


  storeUserData(token, user){

      localStorage.setItem('id_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('username', user.username);
      this.authToken = token;
      this.user = user;
      this.username = user.username;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


}
