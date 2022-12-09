import { Component } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {


  username=""
  password=""
  searchUser:any=[]
  
  constructor(private api:ApiService,private router:Router){}
  loginValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    this.api.addLogin(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("invalid email or password")
          this.username=""
          this.password=""
        } else {
          this.searchUser=response;
          let userid=response.userid
          console.log(userid)
          localStorage.setItem("userInfo",userid)
          this.router.navigate(['/profileview'])
        }
       
       
      }
    )
    
  }
  }
  