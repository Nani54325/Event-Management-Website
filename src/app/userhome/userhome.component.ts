import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  a: any;
  id:any;
  
  constructor(private us:UserserviceService) { 
    this.viewevents();
  }
  events1:any;
  viewevents(){
    this.us.events().subscribe((result1:any)=>{this.events1=result1});
  }
  // user1:any;
  // viewUsers(){
  //   this.us.user().subscribe((result:any)=>{this.user1=result;});
  // }
  submit(event:any){
    //this.us.user().subscribe((result2:any)=>{this.user1=result2});
    this.a = prompt("Enter Number Of Tickets");
    var eventdata = {
      "eid":event.id,
      "tickets": this.a
    };
    this.us.ticket(eventdata).subscribe();
    alert("Successfully Registered");
  }
  

  ngOnInit(): void {
  }

}
