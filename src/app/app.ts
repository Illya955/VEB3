import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';

interface Student {
  name: string;
  age: number;
  grade: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  students: Student[] = [
    { name: 'Анна', age: 18, grade: 11 },
    { name: 'Максим', age: 17, grade: 7 },
    { name: 'Олег', age: 18, grade: 5 }
  ];

  newStudent: Student = {
    name: '',
    age: 0,
    grade: 0
  };

  addStudent(): void {
    if (
      this.newStudent.name.trim() === '' ||
      this.newStudent.age <= 0 ||
      this.newStudent.grade <= 0
    ) {
      return;
    }

    this.students.push({
      name: this.newStudent.name,
      age: this.newStudent.age,
      grade: this.newStudent.grade
    });

    this.clearForm();
  }

  clearForm(): void {
    this.newStudent = {
      name: '',
      age: 0,
      grade: 0
    };
  }

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
  }

  getGradeClass(grade: number): string {
    if (grade >= 10) {
      return 'high';
    }

    if (grade >= 7) {
      return 'medium';
    }

    return 'low';
  }
}
