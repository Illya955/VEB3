
export default function ContactsPage() {
  return (
    <section className="contacts">
      <h1 className="section-title">
        Контакти
      </h1>

      <p className="section-description">
        Ми завжди раді допомогти нашим читачам!
      </p>

      <div className="contact-card">
        <h2>📍 Наша адреса</h2>
        <p>м. Київ, Україна</p>

        <h2>📧 Електронна пошта</h2>
        <p>bookspace@example.com</p>

        <h2>📞 Телефон</h2>
        <p>+380 00 000 00 00</p>

        <h2>🕒 Графік роботи</h2>
        <p>Понеділок – П'ятниця: 09:00–18:00</p>
      </div>
    </section>
  );
}
