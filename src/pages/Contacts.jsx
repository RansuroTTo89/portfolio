export default function Contacts() {
  return (
    <div className="info-page info-page--wide">
      <h1 className="info-page__title">Контакты</h1>
      <div className="contacts-layout">
        <div className="contacts-grid">
          <div className="contact-card">
            <span className="contact-card__icon">📞</span>
            <div>
              <p className="contact-card__label">Телефон</p>
              <a href="tel:+998900000000" className="contact-card__value">+998 90 000 00 00</a>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-card__icon">✉️</span>
            <div>
              <p className="contact-card__label">Email</p>
              <a href="mailto:ATshop@gmail.com" className="contact-card__value">ATshop@gmail.com</a>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-card__icon">📍</span>
            <div>
              <p className="contact-card__label">Адрес</p>
              <p className="contact-card__value">г. Ташкент, ул. TTZ 2</p>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-card__icon">🕐</span>
            <div>
              <p className="contact-card__label">Время работы</p>
              <p className="contact-card__value">Пн–Вс: 9:00 – 21:00</p>
            </div>
          </div>
        </div>

        
        <div className="contacts-logo">
          <div className="contacts-logo__circle">
            <span className="contacts-logo__at">AT</span>
            <span className="contacts-logo__shop">Shop</span>
          </div>
          <p className="contacts-logo__tagline">Ваш главный онлайн‑гипермаркет</p>
        </div>
      </div>
    </div>
  );
}
