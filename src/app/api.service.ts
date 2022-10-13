import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private courseSite:HttpClient) { }

  apiCall=()=>{
    return  this.courseSite.get("http://mylinkurcodesapp.herokuapp.com/getcourses")
  }

  addCourse=(data :any)=>{
    return this.courseSite.post("https://mylinkurcodesapp.herokuapp.com/addcourse",data)
  }

}
