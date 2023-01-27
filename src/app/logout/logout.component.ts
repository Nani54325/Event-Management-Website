import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private us:UserserviceService, private _route:Router) { }
  yes(){
    this.us.logout().subscribe();
    this._route.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
