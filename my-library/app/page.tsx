
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <h1>Ласкаво просимо до My Library!</h1>

      <p>
        Відкривай нові книги, знаходь цікаву літературу
        та залишай заявки на отримання книг.
      </p>

      <div className="hero-buttons">
        <Link href="/catalog" className="button">
          Переглянути книги
        </Link>

        <Link href="/form" className="button secondary">
          Залишити заявку
        </Link>
      </div>
    </section>
  );
}
