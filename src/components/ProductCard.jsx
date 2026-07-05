import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toSum, getDiscountedSum, formatSum, DISPLAY_STOCK } from "../utils/pricing";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { id, title, thumbnail, price, discountPercentage } = product;
  const priceSum = toSum(price);
  const finalPrice = discountPercentage > 0 ? getDiscountedSum(priceSum, discountPercentage) : priceSum;

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ id, title, thumbnail, price: finalPrice }));
  }

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card__image-wrap">
        <img src={thumbnail} alt={title} className="product-card__image" loading="lazy" />
        {discountPercentage > 0 && (
          <span className="product-card__badge">-{Math.round(discountPercentage)}%</span>
        )}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>
        <p className="product-card__price">{formatSum(finalPrice)}</p>
        <p className="product-card__stock">В наличии: {DISPLAY_STOCK} шт.</p>
        <button className="btn btn--primary product-card__buy" onClick={handleAddToCart}>
          В корзину
        </button>
      </div>
    </Link>
  );
}
