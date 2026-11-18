
import Filter from "../../components/Filter";

async function getBooks() {
  const response = await fetch(
    "https://openlibrary.org/search.json?q=javascript&limit=10",
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error("Не вдалося завантажити книги");
  }

  const data = await response.json();

  return data.docs;
}

export default async function CatalogPage() {
  const books = await getBooks();

  return (
    <section>
      <h1>Каталог книг</h1>

      <p className="description">
        Знаходь цікаві книги в нашій електронній бібліотеці.
      </p>

      <Filter books={books} />
    </section>
  );
}
