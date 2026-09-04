import { Injectable, signal } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = signal<Student[]>([
    {
      id: 1,
      name: 'Анна',
      age: 18,
      grade: 11
    },
    {
      id: 2,
      name: 'Максим',
      age: 17,
      grade: 8
    },
    {
      id: 3,
      name: 'Олег',
      age: 18,
      grade: 6
    }
  ]);

  getStudents() {
    return this.students;
  }

  addStudent(name: string, age: number, grade: number) {
    const newStudent: Student = {
      id: Date.now(),
      name,
      age,
      grade
    };

    this.students.update(students => [...students, newStudent]);
  }

  removeStudent(id: number) {
    this.students.update(students =>
      students.filter(student => student.id !== id)
    );
  }
}
