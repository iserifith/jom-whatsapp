import { Component, OnInit } from '@angular/core';
import { MobileService } from '../../services/mobile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _itemService: MobileService) { }

  data: any;
  mobile_number: String;
  pre_text: String;
  link: String;


  ngOnInit() {
    this.getAllMobile();
  }

  getAllMobile(){
    this._itemService.getAllData().subscribe(data => {
      this.data = data;
    });
  }

  goToLink(data: any){
    window.location.href = 'https://api.whatsapp.com/send?phone=' + data.mobile_number + '&text=' + data.pre_text;
  }

}
