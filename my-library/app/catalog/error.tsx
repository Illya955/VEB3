
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="error">
      <h2>Помилка завантаження!</h2>

      <p>{error.message}</p>

      <button className="button" onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}
