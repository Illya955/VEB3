
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Сталася помилка!</h2>
      <p>Не вдалося завантажити публікації.</p>

      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}
