import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  imports: [RouterLink],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetailComponent {

  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);

  book: Book | undefined;

  constructor() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);

      this.book = this.bookService.getItemById(id);
    });
  }
}
