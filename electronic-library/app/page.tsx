
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="tag">
          ТВОЯ БІБЛІОТЕКА ОНЛАЙН
        </span>

        <h1>
          Відкрий для себе
          <br />
          <span>світ книг</span>
        </h1>

        <p>
          BookSpace — це сучасна електронна бібліотека,
          де кожна книга відкриває нові можливості,
          знання та незабутні історії.
        </p>

        <Link href="/catalog" className="btn">
          Переглянути каталог →
        </Link>
      </div>

      <div className="hero-image">
        📚
      </div>
    </section>
  );
}
