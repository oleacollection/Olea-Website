import { useState, useRef } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, onGiftAnimation }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();
  const imageRef = useRef(null);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setJustAdded(true);

    // Trigger gift box animation
    if (onGiftAnimation && imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      onGiftAnimation({
        sourceRect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
        productImage: product.image,
        productName: product.name,
      });
    }

    setTimeout(() => {
      setJustAdded(false);
      setSelectedSize(null);
    }, 2200);
  };

  return (
    <article className="product-card" id={`product-${product.id}`}>
      <div className="product-card__image-wrap" ref={imageRef}>
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        <span className="product-card__badge">{product.category}</span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        {/* Size selector */}
        <div className="product-card__sizes">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`size-btn${size === "One Size" ? " one-size" : ""}${selectedSize === size ? " selected" : ""}`}
              onClick={() => setSelectedSize(size)}
              aria-label={`Select size ${size}`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add to cart */}
        <div className="product-card__add-btn">
          <button
            className={`add-to-cart-btn${justAdded ? " added" : ""}`}
            onClick={handleAddToCart}
            disabled={!selectedSize || justAdded}
            id={`add-to-cart-${product.id}`}
          >
            {justAdded ? (
              <>✓ Added</>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                Add to Bag
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
