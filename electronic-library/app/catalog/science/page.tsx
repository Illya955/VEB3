
const books = [
  {
    title: "Коротка історія часу",
    author: "Стівен Гокінг",
    emoji: "🌌",
  },
  {
    title: "Походження видів",
    author: "Чарльз Дарвін",
    emoji: "🧬",
  },
  {
    title: "Космос",
    author: "Карл Саган",
    emoji: "🚀",
  },
  {
    title: "Фізика майбутнього",
    author: "Мічіо Каку",
    emoji: "⚛️",
  },
];

export default function SciencePage() {
  return (
    <section>
      <h1 className="section-title">
        Наукова література
      </h1>

      <p className="section-description">
        Книги для розвитку знань та кругозору.
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
