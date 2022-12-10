import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allcomplaint',
  templateUrl: './allcomplaint.component.html',
  styleUrls: ['./allcomplaint.component.css']
})
export class AllcomplaintComponent {


  constructor(private api:ApiService)
  {
    api.viewcomplaint().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
data:any=[]
}
