import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private us:UserserviceService) {}
  players:any;
  loginform = new FormGroup({first: new FormControl('',[Validators.required, Validators.maxLength(10)]),
  last: new FormControl('',[Validators.required, Validators.maxLength(10)]),
  mother: new FormControl('',[Validators.required, Validators.maxLength(10)]),
  father: new FormControl('',[Validators.required, Validators.maxLength(10)]),
  address: new FormControl('',[Validators.required, Validators.maxLength(100)]),
  password: new FormControl('',[Validators.required,Validators.minLength(8)]),
  cpassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
  email: new FormControl('',[Validators.required,Validators.email]),
  mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
  //gender: new FormControl('',[Validators.required])
  
});
  login(insert:any){
    console.log(this.loginform);
    
  }
  get first(){
    return this.loginform.get('first');
  }
  get last(){
    return this.loginform.get('last');
  }
  get mother(){
    return this.loginform.get('mother');
  }
  get father(){
    return this.loginform.get('father');
  }
  get address(){
    return this.loginform.get('address');
  }
  get password(){
    return this.loginform.get('password');
  }
  get cpassword(){
    return this.loginform.get('cpassword');
  }
  get email(){
    return this.loginform.get('email');
  }
  get mobile(){
    return this.loginform.get('mobile');
  }
  
  
  submit(){
    
    if(this.last?.value?.length==0 || this.first?.value?.length==0||this.father?.value?.length==0||
      this.mother?.value?.length==0 || this.email?.value?.length==0 || this.mobile?.value?.length==0 ||
      this.address?.value?.length==0 || this.password?.value?.length==0 || this.first?.invalid ||
      this.last?.invalid || this.father?.invalid || this.mother?.invalid || this.email?.invalid ||
      this.mobile?.invalid || this.address?.invalid || this.password?.invalid){
        
      alert("Please Enter Valid Details");
      //alert(this.gender?.value);
    }
    
    else{
      if(this.password?.value!=this.cpassword?.value){
        alert("Passwords Should Match");
      }
      else{
        alert("Successfully Registered");
        this.us.insertService(this.loginform.value).subscribe();
        this.us.getid().subscribe((result:any)=>{this.players=result;
        alert("Please note your User ID: "+(result.id+1))});
      }
      
    }
    //alert(this.gender?.value);
  }

  ngOnInit(): void {
  }
  

}
