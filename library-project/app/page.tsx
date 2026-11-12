
import RequestForm from "./components/RequestForm";

export default function Home() {
  return (
    <main className="container">
      <h1>Заявка до університетської бібліотеки</h1>

      <p className="description">
        Заповніть форму, щоб залишити заявку
        на потрібну вам книгу.
      </p>

      <RequestForm />
    </main>
  );
}
