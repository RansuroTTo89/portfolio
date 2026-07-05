export default function About() {
  return (
    <div className="info-page">
      <h1 className="info-page__title">О нас</h1>
      <div className="about-content">
        <p className="about-lead">
          Добро пожаловать в <strong>AT Shop</strong> — ваш главный онлайн-гипермаркет в Узбекистане!
        </p>
        <p>
          Наша миссия — стереть границы между вашими желаниями и возможностями. В каталоге AT Shop
          собрано абсолютно всё, что нужно для комфортной жизни: от свежих, отборных яблок к вашему
          столу до современных автомобилей, готовых к любым поездкам.
        </p>
        <p>
          Мы объединили тысячи категорий товаров на одной платформе, чтобы вы не тратили время на
          долгие поиски.
        </p>

        <h2 className="about-subtitle">Почему AT Shop — это ваш лучший выбор?</h2>
        <ul className="about-list">
          <li>
            <span className="about-list__emoji">🌍</span>
            <div>
              <strong>Безграничный ассортимент:</strong> От повседневных мелочей до крупных
              и премиальных покупок.
            </div>
          </li>
          <li>
            <span className="about-list__emoji">🚀</span>
            <div>
              <strong>Надежная логистика:</strong> Быстрая и бережная доставка заказов любого
              габарита.
            </div>
          </li>
          <li>
            <span className="about-list__emoji">💳</span>
            <div>
              <strong>Удобный сервис:</strong> Безопасная оплата в один клик и поддержка на каждом
              этапе.
            </div>
          </li>
        </ul>

        <p className="about-closing">
          Меняйте качество жизни к лучшему, выбирая лучшее.{" "}
          <strong>Спасибо, что доверяете AT Shop!</strong>
        </p>
      </div>
    </div>
  );
}
