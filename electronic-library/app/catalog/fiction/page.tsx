
const books = [
  {
    title: "Маленький принц",
    author: "Антуан де Сент-Екзюпері",
    emoji: "🌹",
  },
  {
    title: "Гаррі Поттер",
    author: "Дж. К. Ролінґ",
    emoji: "⚡",
  },
  {
    title: "Кобзар",
    author: "Тарас Шевченко",
    emoji: "🌻",
  },
  {
    title: "Тигролови",
    author: "Іван Багряний",
    emoji: "🐅",
  },
];

export default function FictionPage() {
  return (
    <section>
      <h1 className="section-title">
        Художня література
      </h1>

      <p className="section-description">
        Найкращі твори для натхнення та відпочинку.
      </p>

      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <div className="book-cover">
              {book.emoji}
            </div>

            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
