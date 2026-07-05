import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination as SwiperPagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { loadProductById, clearProduct } from "../features/products/productDetailSlice";
import { addToCart } from "../features/cart/cartSlice";
import { toSum, getDiscountedSum, formatSum, DISPLAY_STOCK } from "../utils/pricing";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, status, error } = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(loadProductById(id));
    return () => dispatch(clearProduct());
  }, [dispatch, id]);

  if (status === "loading" || status === "idle") {
    return <p className="status-message">Загрузка товара...</p>;
  }

  if (status === "failed") {
    return (
      <div>
        <p className="status-message status-message--error">Ошибка: {error}</p>
        <Link to="/" className="back-link">← Вернуться к каталогу</Link>
      </div>
    );
  }

  if (!item) return null;

  const { title, description, price, discountPercentage, images, brand, category, rating } = item;
  const priceSum = toSum(price);
  const finalPrice = discountPercentage > 0 ? getDiscountedSum(priceSum, discountPercentage) : priceSum;
  const gallery = images && images.length ? images : [item.thumbnail];

  function handleAddToCart() {
    dispatch(addToCart({ id: item.id, title, thumbnail: item.thumbnail, price: finalPrice }));
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Вернуться к каталогу</Link>

      <div className="product-detail__content">
        <div className="product-detail__gallery">
          <Swiper
            modules={[Navigation, SwiperPagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {gallery.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img src={src} alt={`${title} - изображение ${idx + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="product-detail__info">
          <h1>{title}</h1>
          {brand && <p className="product-detail__meta">Бренд: {brand}</p>}
          {category && <p className="product-detail__meta">Категория: {category}</p>}
          {rating && <p className="product-detail__meta">Рейтинг: {rating} ★</p>}

          <p className="product-detail__description">{description}</p>

          <p className="product-detail__price">{formatSum(finalPrice)}</p>
          {discountPercentage > 0 && (
            <span className="product-detail__discount-badge">-{Math.round(discountPercentage)}%</span>
          )}

          <p className="product-detail__stock">В наличии: {DISPLAY_STOCK} шт.</p>

          <button className="btn btn--primary btn--large" onClick={handleAddToCart}>
            🛒 В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
