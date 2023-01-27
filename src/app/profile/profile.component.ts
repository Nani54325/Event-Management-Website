import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  first1:string | undefined;

  constructor(private us:UserserviceService) { 
    this.getuserprofile();
    
  }
  loginform = new FormGroup({first: new FormControl('',[Validators.maxLength(10)]),
  last: new FormControl('',[Validators.maxLength(10)]),
  mother: new FormControl('',[Validators.maxLength(10)]),
  father: new FormControl('',[Validators.maxLength(10)]),
  address: new FormControl('',[Validators.maxLength(100)]),
  email: new FormControl('',[Validators.email]),
  mobile: new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
  opassword: new FormControl('',[Validators.minLength(8)]),
  npassword: new FormControl('',[Validators.minLength(8)]),
  cnpassword: new FormControl('',[Validators.minLength(8)]),
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
  get email(){
    return this.loginform.get('email');
  }
  get mobile(){
    return this.loginform.get('mobile');
  }
  get opassword(){
    return this.loginform.get('opassword');
  }
  get npassword(){
    return this.loginform.get('npassword');
  }
  get cnpassword(){
    return this.loginform.get('cnpassword');
  }
  events1:any;
  getuserprofile(){
    this.us.user().subscribe((result1:any)=>{this.events1=result1;
    this.first1 = result1.first});
  }
  
  submit(){
    var flag = 0;
    var updatedata ={
      "id":this.events1.id,
      "first":this.events1.first,
      "last":this.events1.last,
      "mother":this.events1.mother,
      "father":this.events1.father,
      "email":this.events1.email,
      "mobile":this.events1.mobile,
      "address":this.events1.address,
      "password":this.events1.password
    };
    if(this.first?.value?.length!=0){
      updatedata.first = this.first?.value;
      alert("Updating First Name to " + updatedata.first);
    }
    if(this.last?.value?.length!=0){
      updatedata.last = this.last?.value;
      alert("Updating Last Name to " + updatedata.last);
    }
    if(this.mother?.value?.length!=0){
      updatedata.mother = this.mother?.value;
      alert("Updating Mother Name to "+updatedata.mother);
    }
    if(this.father?.value?.length!=0){
      updatedata.father = this.father?.value;
      alert("Updating Father Name to "+updatedata.father);
    }
    if(this.email?.value?.length!=0){
      updatedata.email = this.email?.value;
      alert("Updating Email to "+updatedata.email);
    }
    if(this.mobile?.value?.length!=0){
      updatedata.mobile = this.mobile?.value;
      alert("Updating Mobile to "+updatedata.mobile);
    }
    if(this.address?.value?.length!=0){
      updatedata.address = this.address?.value;
      alert("Updating address to "+updatedata.address);
    }
    if(this.opassword?.value?.length!=0 && this.npassword?.value?.length!=0 && this.cnpassword?.value?.length!=0){
      if(this.opassword?.value==updatedata.password){
        if(this.npassword?.value!=this.cnpassword?.value){
          flag++;
          alert("Passwords should match");
        }
        else{
          updatedata.password = this.npassword?.value;
          alert("Updating Password");
        }

      }
      else{
        flag++;
        alert("Please Enter valid Old Password");
      }
      
    }
    if(flag==0){
      this.us.updateprofile(updatedata).subscribe();
      alert("Update Successful");
    }
    
    window.location.reload();

  }

  ngOnInit(): void {
  }

}
