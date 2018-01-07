import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../../services/mobile.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  mobile_number: String;
  pre_text: String;

  constructor(private _mobileService: MobileService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const data = {
      mobile_number: this.mobile_number,
      pre_text: this.pre_text,
      username: localStorage.getItem('username')
    }

    this._mobileService.addData(data);
    this._router.navigate(['/dashboard']);

  }

}
