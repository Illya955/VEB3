
"use client";

import { useEffect } from "react";

export default function CatalogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <div className="error-icon">⚠️</div>

      <h2>Упс! Сталася помилка</h2>

      <p>
        Не вдалося завантажити каталог книг.
        Спробуйте ще раз.
      </p>

      <button
        onClick={() => reset()}
        className="btn"
      >
        Спробувати знову
      </button>
    </div>
  );
}
