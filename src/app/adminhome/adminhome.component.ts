import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  message: string | undefined;
  //myArray: string[] = ["hello","hi"];

  constructor(private http:HttpClient, private us:UserserviceService) { }
  selectedFile: any;
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  loginform = new FormGroup({ename: new FormControl('',[Validators.required]),
  start_date: new FormControl('',[Validators.required]),
  end_date: new FormControl('',[Validators.required]),
  description: new FormControl('',[Validators.required, Validators.maxLength(100)]),
  poster_path: new FormControl('',[Validators.required,Validators.minLength(8)]),
  help_name: new FormControl('',[Validators.required]),
  help_num: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
  //gender: new FormControl('',[Validators.required])
  
});
  login(insert:any){
    console.log(this.loginform);
    
  }
  get ename(){
    return this.loginform.get('ename');
  }
  get start_date(){
    return this.loginform.get('start_date');
  }
  get end_date(){
    return this.loginform.get('end_date');
  }
  get description(){
    return this.loginform.get('description');
  }
  get poster_path(){
    return this.loginform.get('poster_path');
  }
  get help_name(){
    return this.loginform.get('help_name');
  }
  get help_num(){
    return this.loginform.get('help_num');
  }
  file:any;
  getFile(event:any){
    this.file = event.target.files[0];
    
  }
  submit(){
    if(this.ename?.value?.length==0 || this.start_date?.value?.length==0||this.end_date?.value?.length==0||
      this.description?.value?.length==0 || this.poster_path?.value?.length==0 || this.help_name?.value?.length==0 ||
      this.help_num?.value?.length==0 || this.start_date?.invalid ||
      this.ename?.invalid || this.end_date?.invalid || this.description?.invalid || this.poster_path?.invalid ||
      this.help_name?.invalid || this.help_num?.invalid){
        
      alert("Please Enter Valid Details");
      //alert(this.gender?.value);
    }
    
    else{
      const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.http.post('http://localhost:9091/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
      this.us.event(this.loginform.value).subscribe();
      alert("Event Added Successfully"); 
      
    }
  }

  ngOnInit(): void {
  }

}
