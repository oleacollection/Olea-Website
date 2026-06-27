import { useState, useRef } from "react";
import { useCart } from "../context/CartContext";

export default function GiftingProductCard({ product, onGiftAnimation }) {
  const [customText, setCustomText] = useState("");
  const [bulkQty, setBulkQty] = useState(product.minQty || 10);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();
  const imageRef = useRef(null);

  const isPersonal = product.type === "personal";
  const isCorporate = product.type === "corporate";

  const canAdd = isPersonal ? customText.trim().length > 0 : bulkQty >= (product.minQty || 1);

  const handleAddToCart = () => {
    if (!canAdd) return;

    const meta = isPersonal
      ? { customText: customText.trim() }
      : { bulkQty };

    addToCart(product, isPersonal ? `Custom: ${customText.trim()}` : `Qty: ${bulkQty}`, meta);
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
      if (isPersonal) setCustomText("");
      if (isCorporate) setBulkQty(product.minQty || 10);
    }, 2200);
  };

  return (
    <article className="product-card gifting-card" id={`product-${product.id}`}>
      <div className="product-card__image-wrap" ref={imageRef}>
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        <span className="product-card__badge gifting-badge">
          {isPersonal ? "personal" : "corporate"}
        </span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__price">
          ₹{product.price.toLocaleString("en-IN")}
          {isCorporate && <span className="product-card__per-unit"> / unit</span>}
        </p>

        {/* ── Personal Gifting: customisation text field ── */}
        {isPersonal && (
          <div className="gifting-field">
            <label className="gifting-field__label" htmlFor={`custom-${product.id}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Personalise
            </label>
            <input
              type="text"
              id={`custom-${product.id}`}
              className="gifting-field__input"
              placeholder={product.customPlaceholder || "Enter custom text"}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              maxLength={60}
              disabled={justAdded}
            />
            {customText.length > 0 && (
              <span className="gifting-field__charcount">
                {customText.length}/60
              </span>
            )}
          </div>
        )}

        {/* ── Corporate Gifting: bulk quantity field ── */}
        {isCorporate && (
          <div className="gifting-field">
            <label className="gifting-field__label" htmlFor={`qty-${product.id}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                <path d="M16 8h4a2 2 0 012 2v9a2 2 0 01-2 2H8a2 2 0 01-2-2v-4" />
              </svg>
              Quantity
            </label>
            <div className="gifting-qty">
              <button
                className="gifting-qty__btn"
                onClick={() => setBulkQty((q) => Math.max(product.minQty || 1, q - 5))}
                disabled={justAdded || bulkQty <= (product.minQty || 1)}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <input
                type="number"
                id={`qty-${product.id}`}
                className="gifting-qty__input"
                value={bulkQty}
                min={product.minQty || 1}
                onChange={(e) => {
                  const v = parseInt(e.target.value, 10);
                  if (!isNaN(v) && v >= 0) setBulkQty(v);
                }}
                disabled={justAdded}
              />
              <button
                className="gifting-qty__btn"
                onClick={() => setBulkQty((q) => q + 5)}
                disabled={justAdded}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <span className="gifting-field__hint">
              Min. order: {product.minQty || 1} units
            </span>
          </div>
        )}

        {/* Add to cart */}
        <div className="product-card__add-btn">
          <button
            className={`add-to-cart-btn${justAdded ? " added" : ""}`}
            onClick={handleAddToCart}
            disabled={!canAdd || justAdded}
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
                {isCorporate
                  ? `Add ${bulkQty} to Bag`
                  : "Add to Bag"}
              </>
            )}
          </button>
          {isCorporate && !justAdded && canAdd && (
            <p className="gifting-total">
              Subtotal: ₹{(product.price * bulkQty).toLocaleString("en-IN")}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
