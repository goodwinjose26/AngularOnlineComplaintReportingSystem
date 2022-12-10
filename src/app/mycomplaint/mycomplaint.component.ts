import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mycomplaint',
  templateUrl: './mycomplaint.component.html',
  styleUrls: ['./mycomplaint.component.css']
})
export class MycomplaintComponent {

  userid2:any=""
  constructor(private api:ApiService){
     this.userid2=localStorage.getItem("userInfo")
 let data:any=
 {"id2":this.userid2}
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
