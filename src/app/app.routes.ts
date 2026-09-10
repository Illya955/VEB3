import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Books } from './books/books';
import { BookDetail } from './book-detail/book-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'books',
    component: Books
  },
  {
    path: 'book/:id',
    component: BookDetail
  }
];
