import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor() { }

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


  }

  ngOnInit(): void {
  }

}
