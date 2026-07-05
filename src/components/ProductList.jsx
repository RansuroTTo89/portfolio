import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (!products.length) {
    return <p className="empty-state">Товары не найдены.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
