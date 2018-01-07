import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Http, Headers} from '@angular/http'; // temporary
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class MobileService {

  private api = environment.api + 'mobile';

  constructor(private _http: HttpClient, private http: Http) { }

  data: any;

  // Get All
  getAllData(){
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');

  }

  getData(){
  let username = localStorage.getItem('username');
  return new Promise((resolve, reject) => {
    this.http.get(this.api + '/' + username )
    .map(res => res.json())
    .subscribe(res => {
      resolve(res)
    }, (err) => {
      reject(err);
    });
  });

  }

  // Add new
  addData(data){
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this._http.post(this.api, data, {headers: headers}).subscribe();
  }

  // Edit data
  editData(data){
  let headers = new HttpHeaders();
  return this._http.put(this.api + '/' + data._id, data, {headers: headers}).subscribe();
  }

  // Delete data
  deleteData(data: any){
  let headers = new HttpHeaders();
  return this._http.delete(this.api + '/' + data._id).subscribe();
  }

}
