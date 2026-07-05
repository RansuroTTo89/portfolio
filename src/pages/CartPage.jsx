import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";
import { formatSum } from "../utils/pricing";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (!items.length) {
    return (
      <div className="cart-empty">
        <h2>Корзина пуста</h2>
        <Link to="/" className="btn btn--primary">Перейти в каталог</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-page__title">Ваша корзина</h1>
      <div className="cart-list">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-item__img" />
            <div className="cart-item__info">
              <p className="cart-item__title">{item.title}</p>
              <p className="cart-item__price">{formatSum(item.price)} × {item.quantity}</p>
            </div>
            <button
              className="cart-item__remove"
              onClick={() => dispatch(removeFromCart(item.id))}
              title="Удалить"
            >✕</button>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <p className="cart-footer__total">Итого: <strong>{formatSum(total)}</strong></p>
        <div className="cart-footer__actions">
          <button className="btn btn--outline" onClick={() => dispatch(clearCart())}>
            Очистить корзину
          </button>
          <button className="btn btn--primary">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
