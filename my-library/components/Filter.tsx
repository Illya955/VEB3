
"use client";

import { useState } from "react";

type Book = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
};

export default function Filter({
  books,
}: {
  books: Book[];
}) {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Пошук книги за назвою..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredBooks.map((book) => (
          <article className="product-card" key={book.key}>
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            ) : (
              <div className="no-cover">
                Обкладинка відсутня
              </div>
            )}

            <h3>{book.title}</h3>

            <p>
              Автор: {book.author_name?.join(", ") || "Невідомий"}
            </p>

            <p>
              Рік видання: {book.first_publish_year || "Невідомий"}
            </p>
          </article>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p>Книг не знайдено.</p>
      )}
    </div>
  );
}
