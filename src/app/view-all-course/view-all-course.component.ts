import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-course',
  templateUrl: './view-all-course.component.html',
  styleUrls: ['./view-all-course.component.css']
})
export class ViewAllCourseComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getCourses()
   }

  getCourses=()=>{
    this.myApi.apiCall().subscribe(
      (data)=>{
        this.courseData = data
      }
    )
  }

  courseData:any = []

  ngOnInit(): void {
  }

}
