import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {

  compalaint=""
constructor(private api:ApiService,private router:Router){}
readvalue=()=>
{
  let data:any=
  {
    "userid":localStorage.getItem("userInfo"),
    "compalaint":this.compalaint
  }
  this.api.addcomplaint(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
      
           this.router.navigate(['/profileview'])
         
      }
      else{
        alert(response.message)
      }
    }
  )
}

}
