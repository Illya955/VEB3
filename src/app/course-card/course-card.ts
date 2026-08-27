import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() courseName!: string;
  @Input() teacher!: string;
  @Input() duration!: string;

  @Output() enrolled = new EventEmitter<string>();

  enroll(): void {
    this.enrolled.emit(this.courseName);
  }
}
