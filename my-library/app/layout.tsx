
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Library — Електронна бібліотека",
  description: "Онлайн-бібліотека книг",
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
            My Library
          </Link>

          <nav>
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог книг</Link>
            <Link href="/form">Заявка</Link>
          </nav>
        </header>

        <main className="container">
          {children}
        </main>

        <footer className="footer">
          © 2026 My Library | Електронна бібліотека
        </footer>
      </body>
    </html>
  );
}
