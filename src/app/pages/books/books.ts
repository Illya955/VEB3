import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-books',
  imports: [RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class BooksComponent {

  private bookService = inject(BookService);

  books: Book[] = this.bookService.getItems();
}
