import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }
  
  regValues=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/reg",datatosend)
  }
  loginUser = (data:any)=>{
    return this.http.post("http://localhost:8080/login", data)
  }
  addLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/login",dataToSend)
  }
  getprofile=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/profileview",dataToSend)
  }

  addcomplaint=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addcomplaint",dataToSend)
  }

  viewcomplaint =()=>
  {
    return this.http.get("http://localhost:8080/viewallcomplaint")
  }
  mycomplaint=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewmycomplaint",dataToSend)
  }

  

}
