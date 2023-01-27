import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SeeeventsComponent } from './seeevents/seeevents.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userhome',component:UserhomeComponent},
  { path:'adminhome',component:AdminhomeComponent },
  { path:'seeevents',component:SeeeventsComponent },
  { path:'myevents',component: MyeventsComponent},
  { path:'logout',component:LogoutComponent},
  { path:'adminlogout',component:AdminlogoutComponent },
  {path:'profile',component:ProfileComponent},
  {path:'**',component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
