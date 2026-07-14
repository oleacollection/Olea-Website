export default function ProductCard({ product, onOpenModal }) {
  return (
    <article
      className="product-card product-card--clickable"
      id={`product-${product.id}`}
      onClick={() => onOpenModal(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenModal(product);
        }
      }}
      aria-label={`View details for ${product.name}`}
    >
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
          style={product.category === 'accessories' ? { objectFit: 'contain' } : undefined}
        />
        <span className="product-card__badge">{product.category}</span>
        <div className="product-card__quick-view">
          <span>Quick View</span>
        </div>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </article>
  );
}
