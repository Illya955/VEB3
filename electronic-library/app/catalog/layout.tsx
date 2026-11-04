
import Link from "next/link";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="catalog-layout">
      <div className="catalog-menu">
        <h2>📖 Категорії книг</h2>

        <Link href="/catalog">
          Усі книги
        </Link>

        <Link href="/catalog/fiction">
          Художня література
        </Link>

        <Link href="/catalog/science">
          Наукова література
        </Link>
      </div>

      <div className="catalog-content">
        {children}
      </div>
    </div>
  );
}
