import { Component } from '@angular/core';
import { BookForm } from './book-form/book-form';

@Component({
  selector: 'app-root',
  imports: [BookForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
