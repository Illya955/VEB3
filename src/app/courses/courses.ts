import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-courses',
  imports: [CourseCard, NgIf],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

  message: string = '';

  onCourseEnrolled(courseName: string): void {
    this.message = `Ви записалися на курс «${courseName}»`;
  }
}
