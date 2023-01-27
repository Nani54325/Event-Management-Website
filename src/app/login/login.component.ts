import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us:UserserviceService, private _route:Router) {}
  players:any;
  loginform1 = new FormGroup({
  id: new FormControl('',[Validators.required, Validators.maxLength(100)]),
  password: new FormControl('',[Validators.required,Validators.minLength(8)])
  //gender: new FormControl('',[Validators.required])
  
});
  login(insert:any){
    console.log(this.loginform1);
    
  }
  get id(){
    return this.loginform1.get('id');
  }
  get password(){
    return this.loginform1.get('password');
  }
  
  
  submit(){
    
    if(this.id?.value?.length==0 || this.password?.value?.length==0 || this.id?.invalid ||
      this.password?.invalid){
        alert("Enter Valid Details");
      }
      else if(this.id?.value=='Admin' && this.password?.value=='Admin@123'){
        this._route.navigate(['/adminhome']);
      }
      else{
        //alert("Valid Details");
        this.us.getuser(this.loginform1.value).subscribe(
          data=>{
            this.us.loguser(this.loginform1.value).subscribe()
            alert("Login Successful");
            this._route.navigate(['/userhome']);
          },
          error=>{
            alert("Invalid Credentials");
          }
        );
      }
    //alert(this.gender?.value);
  }

  ngOnInit(): void {
  }

}
