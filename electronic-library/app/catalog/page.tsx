
const books = [
  {
    title: "Маленький принц",
    author: "Антуан де Сент-Екзюпері",
    category: "Художня література",
    emoji: "🌹",
  },
  {
    title: "Гаррі Поттер",
    author: "Дж. К. Ролінґ",
    category: "Художня література",
    emoji: "⚡",
  },
  {
    title: "Коротка історія часу",
    author: "Стівен Гокінг",
    category: "Наукова література",
    emoji: "🌌",
  },
  {
    title: "Походження видів",
    author: "Чарльз Дарвін",
    category: "Наукова література",
    emoji: "🧬",
  },
];

export default async function CatalogPage() {
  await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  return (
    <section>
      <h1 className="section-title">
        Каталог книг
      </h1>

      <p className="section-description">
        Обирай книгу та відкривай нові світи.
      </p>

      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <div className="book-cover">
              {book.emoji}
            </div>

            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <span>{book.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
