import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-seeevents',
  templateUrl: './seeevents.component.html',
  styleUrls: ['./seeevents.component.css']
})
export class SeeeventsComponent implements OnInit {

  constructor( private us: UserserviceService) { 
    this.viewevents();
  }
  events1:any;
  viewevents(){
    this.us.events().subscribe((result:any)=>{this.events1=result});
  }

  ngOnInit(): void {
  }

}
