import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private myApi:ApiService) { }



  courseTitle = ""
  courseDescription = ""
  courseDuration = ""
  courseDate = ""
  courseVenue = ""
  
  readValue=()=>{

    let data = {
      "courseTitle" : this.courseTitle,
      "courseDescription" : this.courseDescription,
      "courseDuration" : this.courseDuration,
      "courseDate" : this.courseDate,
      "courseVenue" : this.courseVenue
    }
    console.log(data)
    this.myApi.addCourse(data).subscribe(
      (response)=>{
        console.log("Success")
        console.log(response)
        alert("Added successfully")
      }
    )


  }

  ngOnInit(): void {
  }

}
