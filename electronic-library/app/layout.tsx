
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookSpace — Електронна бібліотека",
  description: "Сучасна електронна бібліотека",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header className="header">
          <Link href="/" className="logo">
            📚 BookSpace
          </Link>

          <nav className="nav">
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог книг</Link>
            <Link href="/catalog/fiction">Художня література</Link>
            <Link href="/catalog/science">Наукова література</Link>
            <Link href="/contacts">Контакти</Link>
            <Link href="/practice">Практична робота 8</Link>
          </nav>
        </header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          <p>© 2026 BookSpace. Електронна бібліотека.</p>
          <p>Читайте більше — пізнавайте світ!</p>
        </footer>
      </body>
    </html>
  );
}
