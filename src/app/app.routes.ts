import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { BooksComponent } from './pages/books/books';
import { BookDetailComponent } from './pages/book-detail/book-detail';
import { AddBookComponent } from './pages/add-book/add-book';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'books/add',
    component: AddBookComponent
  },
  {
    path: 'book/:id',
    component: BookDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
