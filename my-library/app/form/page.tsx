
import RequestForm from "../../components/RequestForm";

export default function FormPage() {
  return (
    <section>
      <h1>Заявка на отримання книги</h1>

      <p className="description">
        Заповніть форму, щоб залишити заявку на книгу.
      </p>

      <RequestForm />
    </section>
  );
}
