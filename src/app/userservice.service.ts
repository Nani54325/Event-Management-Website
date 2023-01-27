import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  url1 = "http://localhost:9091/insertuser";
  insertService(data:any){
    return this.http.post(this.url1,data);
  }
  url2 = "http://localhost:9091/getid";
  n:any;
  getid(){
    return this.http.get(this.url2);
    
  }
  url3 = "http://localhost:9091/valid";
  getuser(data:any):Observable<any>{
    //alert("hello");
    return this.http.post<any>(this.url3,data);
  }
  url4 = "http://localhost:9091/loguser";
  loguser(data:any){
    return this.http.post(this.url4,data);
  }
  url5 = "http://localhost:9091/user";
  user(){
    return this.http.get(this.url5);
  }
  url6 = "http://localhost:9091/event";
  event(data:any){
    return this.http.post(this.url6,data);
  }
  url7 = "http://localhost:9091/upcoming";
  events(){
    return this.http.get(this.url7);
    
  }
  url8 = "http://localhost:9091/ticket";
  ticket(data:any){
    return this.http.post(this.url8,data);
  }
  url9 = "http://localhost:9091/logoutuser";
  logout(){
    return this.http.get(this.url9);
  }
  url10 = "http://localhost:9091/myevents";
  myevents(){
    return this.http.get(this.url10);
  }
  url11 = "http://localhost:9091/updateprofile";
  updateprofile(data:any){
    return this.http.post(this.url11,data);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  
}
