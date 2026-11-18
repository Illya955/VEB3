
"use client";

import { useActionState } from "react";
import {
  createRequest,
  type FormState,
} from "../app/actions";

const initialState: FormState = {
  success: false,
  message: "",
};

export default function RequestForm() {
  const [state, formAction, pending] = useActionState(
    createRequest,
    initialState
  );

  return (
    <form action={formAction} className="order-form">
      <h2>Заявка на отримання книги</h2>

      <label>Ваше ім'я:</label>
      <input
        type="text"
        name="name"
        placeholder="Введіть ім'я"
        required
      />
      {state.errors?.name && (
        <p className="field-error">{state.errors.name}</p>
      )}

      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        required
      />
      {state.errors?.email && (
        <p className="field-error">{state.errors.email}</p>
      )}

      <label>Назва книги:</label>
      <input
        type="text"
        name="book"
        placeholder="Введіть назву книги"
        required
      />
      {state.errors?.book && (
        <p className="field-error">{state.errors.book}</p>
      )}

      <button
        type="submit"
        className="button"
        disabled={pending}
      >
        {pending ? "Надсилання..." : "Надіслати заявку"}
      </button>

      {state.message && (
        <p className={state.success ? "success" : "field-error"}>
          {state.message}
        </p>
      )}
    </form>
  );
}
