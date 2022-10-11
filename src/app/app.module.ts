import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewAllCourseComponent } from './view-all-course/view-all-course.component';
import { HttpClientModule } from "@angular/common/http";

const link:Routes = [
  {
    path:"",component:AddCourseComponent
  },
  {
    path:"viewall",component:ViewAllCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCourseComponent,
    ViewAllCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
