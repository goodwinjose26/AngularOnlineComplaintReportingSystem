import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileviewComponent } from './profileview/profileview.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { MycomplaintComponent } from './mycomplaint/mycomplaint.component';
import { AllcomplaintComponent } from './allcomplaint/allcomplaint.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"profileview",
    component:ProfileviewComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"adminhome",
    component:AdminhomeComponent
  },
  {
    path:"addcomplaint",
    component:ComplaintComponent
  },
  {
    path:"viewallcomplaint",
    component:AllcomplaintComponent
  },
  {
    path:"mycomplaint",
    component:MycomplaintComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    RegistrationComponent,
    NavbarComponent,
    ProfileviewComponent,
    AdminnavbarComponent,
    AdminhomeComponent,
    ComplaintComponent,
    MycomplaintComponent,
    AllcomplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
