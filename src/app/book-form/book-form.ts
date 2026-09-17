import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookForm {

  newItem = {
    title: '',
    author: '',
    description: ''
  };

  books: any[] = [];

  submitted = false;

  addItem(form: any) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.books.push({
      title: this.newItem.title,
      author: this.newItem.author,
      description: this.newItem.description
    });

    form.resetForm();

    this.submitted = false;
  }
}
