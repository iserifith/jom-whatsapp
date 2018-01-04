import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../../services/mobile.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  mobile_number: String;
  pre_text: String;

  constructor(private _mobileService: MobileService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const data = {
      mobile_number: this.mobile_number,
      pre_text: this.pre_text
    }
    this._mobileService.editData(data);
    this._router.navigate(['']);
  }

}
