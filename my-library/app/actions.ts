
"use server";

export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    book?: string;
  };
};

export async function createRequest(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const book = String(formData.get("book") ?? "").trim();

  const errors: FormState["errors"] = {};

  if (name.length < 2) {
    errors.name = "Введіть ім'я (мінімум 2 символи)";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Введіть правильний email";
  }

  if (book.length < 2) {
    errors.book = "Вкажіть назву книги";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Перевірте введені дані.",
      errors,
    };
  }

  return {
    success: true,
    message: `Дякуємо, ${name}! Ваша заявка на книгу "${book}" прийнята.`,
  };
}
