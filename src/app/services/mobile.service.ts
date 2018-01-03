import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class MobileService {

  private api = environment.api + 'mobile';

  constructor(private _http: HttpClient) { }

  data: any;

  // Get All
  getAllData(){
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this._http.get(this.api, {headers: headers});
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
