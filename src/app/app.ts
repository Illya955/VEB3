import { Component } from '@angular/core';
import { Header } from './header/header';
import { Courses } from './courses/courses';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Courses, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  platformName: string = 'EduSpace';

}
