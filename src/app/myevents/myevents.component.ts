import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {

  constructor(private us:UserserviceService) {
    this.viewevents();
   }
  events1:any;
  viewevents(){
    this.us.myevents().subscribe((result1:any)=>{this.events1=result1;});
  }

  ngOnInit(): void {
  }
  

}
