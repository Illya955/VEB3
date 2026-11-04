
"use client";

import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
};

type Props = {
  books: Book[];
};

export default function InteractiveList({ books }: Props) {
  const [search, setSearch] = useState("");
  const [onlyFantasy, setOnlyFantasy] = useState(false);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      !onlyFantasy || book.genre === "Фантастика";

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="interactive-list">

      <h2>Пошук книг</h2>

      <input
        type="text"
        placeholder="Введіть назву книги..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <label className="filter-label">
        <input
          type="checkbox"
          checked={onlyFantasy}
          onChange={(e) => setOnlyFantasy(e.target.checked)}
        />
        Лише фантастика
      </label>

      <h3>Знайдено книг: {filteredBooks.length}</h3>

      <div className="practice-books">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="practice-book-card" key={book.id}>
              <h3>{book.title}</h3>
              <p>Автор: {book.author}</p>
              <span>Жанр: {book.genre}</span>
            </div>
          ))
        ) : (
          <p className="empty-message">
            Нічого не знайдено 😔
          </p>
        )}
      </div>

    </div>
  );
}
