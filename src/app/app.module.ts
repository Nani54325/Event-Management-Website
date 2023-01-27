import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SeeeventsComponent } from './seeevents/seeevents.component';
import { LogoutComponent } from './logout/logout.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserhomeComponent,
    AdminhomeComponent,
    SeeeventsComponent,
    LogoutComponent,
    MyeventsComponent,
    AdminlogoutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
