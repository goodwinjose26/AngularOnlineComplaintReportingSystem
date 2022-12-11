import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mycomplaint',
  templateUrl: './mycomplaint.component.html',
  styleUrls: ['./mycomplaint.component.css']
})
export class MycomplaintComponent {

  userid:any=""
  constructor(private api:ApiService){
     this.userid=localStorage.getItem("userInfo")
 let data:any=
 {"userid":this.userid}
     this.api.mycomplaint(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
     )
    }
    data:any=[]

}
