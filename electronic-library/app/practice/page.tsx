
import InteractiveList from "./InteractiveList";

const books = [
  {
    id: 1,
    title: "Гаррі Поттер",
    author: "Дж. К. Ролінґ",
    genre: "Фантастика",
  },
  {
    id: 2,
    title: "Маленький принц",
    author: "Антуан де Сент-Екзюпері",
    genre: "Пригоди",
  },
  {
    id: 3,
    title: "Володар перснів",
    author: "Дж. Р. Р. Толкін",
    genre: "Фантастика",
  },
  {
    id: 4,
    title: "Кобзар",
    author: "Тарас Шевченко",
    genre: "Поезія",
  },
  {
    id: 5,
    title: "Дюна",
    author: "Френк Герберт",
    genre: "Фантастика",
  },
  {
    id: 6,
    title: "Тигролови",
    author: "Іван Багряний",
    genre: "Пригоди",
  },
];

export default function PracticePage() {
  return (
    <main className="practice-page">
      <h1>📚 Практична робота: Server vs Client Components</h1>

      <p className="practice-description">
        Електронна бібліотека BookSpace
      </p>

      <h2>Загальна кількість книг: {books.length}</h2>

      <InteractiveList books={books} />
    </main>
  );
}
