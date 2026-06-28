import { useState, useEffect, useRef, useCallback } from "react";
import { useCart } from "../context/CartContext";

export default function ProductModal({ product, onClose, onGiftAnimation }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [customText, setCustomText] = useState("");
  const [bulkQty, setBulkQty] = useState(product?.minQty || 10);
  const [justAdded, setJustAdded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { addToCart } = useCart();
  const modalRef = useRef(null);
  const imageRef = useRef(null);

  const isPersonal = product?.type === "personal";
  const isCorporate = product?.type === "corporate";
  const isClothing = !isPersonal && !isCorporate;

  const images = product?.images && product.images.length > 0 ? product.images : [product?.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleNextImage = useCallback(() => {
    if (images.length <= 1) return;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrevImage = useCallback(() => {
    if (images.length <= 1) return;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Close on Escape & Navigate with Left/Right Arrows
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose, handleNextImage, handlePrevImage]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  // Determine if add button should be enabled
  const canAdd = isClothing
    ? !!selectedSize
    : isPersonal
      ? customText.trim().length > 0
      : bulkQty >= (product.minQty || 1);

  const handleAddToCart = () => {
    if (!canAdd) return;

    if (isClothing) {
      addToCart(product, selectedSize);
    } else if (isPersonal) {
      addToCart(product, `Custom: ${customText.trim()}`, { customText: customText.trim() });
    } else {
      addToCart(product, `Qty: ${bulkQty}`, { bulkQty });
    }

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
        productImage: images[activeImageIndex],
        productName: product.name,
      });
    }

    setTimeout(() => {
      setJustAdded(false);
      setSelectedSize(null);
      setCustomText("");
      if (isCorporate) setBulkQty(product.minQty || 10);
      handleClose();
    }, 1400);
  };

  if (!product) return null;

  return (
    <div
      className={`product-modal-overlay${isClosing ? " closing" : ""}`}
      onClick={handleBackdropClick}
      id="product-modal-overlay"
    >
      <div
        className={`product-modal${isClosing ? " closing" : ""}`}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Product details: ${product.name}`}
        id={`product-modal-${product.id}`}
      >
        {/* Close button */}
        <button
          className="product-modal__close"
          onClick={handleClose}
          aria-label="Close product details"
          id="product-modal-close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image section */}
        <div className="product-modal__image-section" ref={imageRef}>
          <img
            src={images[activeImageIndex]}
            alt={`${product.name} - View ${activeImageIndex + 1}`}
            className="product-modal__image"
          />
          <span className="product-modal__badge">
            {isPersonal ? "personal" : isCorporate ? "corporate" : product.category}
          </span>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                className="product-modal__nav-arrow product-modal__nav-arrow--left"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="product-modal__nav-arrow product-modal__nav-arrow--right"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Pagination dots */}
              <div className="product-modal__dots">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`product-modal__dot${activeImageIndex === idx ? " active" : ""}`}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details section */}
        <div className="product-modal__details">
          <div className="product-modal__header">
            <h2 className="product-modal__name">{product.name}</h2>
            <p className="product-modal__price">
              ₹{product.price.toLocaleString("en-IN")}
              {isCorporate && <span className="product-modal__per-unit"> / unit</span>}
            </p>
          </div>

          <p className="product-modal__description">{product.description}</p>

          <div className="product-modal__divider" />

          {/* ── Clothing: Size selector ── */}
          {isClothing && product.sizes && (
            <div className="product-modal__option-group">
              <label className="product-modal__option-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.38 3.46L16 2 12 5.5 8 2l-4.38 1.46a2 2 0 00-1.34 2.08l1.09 13.14A2 2 0 005.36 20.5L12 22l6.64-1.5a2 2 0 001.99-1.82l1.09-13.14a2 2 0 00-1.34-2.08z" />
                </svg>
                Select Size
              </label>
              <div className="product-modal__sizes">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`product-modal__size-btn${size === "One Size" ? " one-size" : ""}${selectedSize === size ? " selected" : ""}`}
                    onClick={() => setSelectedSize(size)}
                    aria-label={`Select size ${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Personal Gifting: Custom text ── */}
          {isPersonal && (
            <div className="product-modal__option-group">
              <label className="product-modal__option-label" htmlFor={`modal-custom-${product.id}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Personalise
              </label>
              <input
                type="text"
                id={`modal-custom-${product.id}`}
                className="product-modal__text-input"
                placeholder={product.customPlaceholder || "Enter custom text"}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                maxLength={60}
                disabled={justAdded}
              />
              {customText.length > 0 && (
                <span className="product-modal__charcount">{customText.length}/60</span>
              )}
            </div>
          )}

          {/* ── Corporate Gifting: Quantity ── */}
          {isCorporate && (
            <div className="product-modal__option-group">
              <label className="product-modal__option-label" htmlFor={`modal-qty-${product.id}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                  <path d="M16 8h4a2 2 0 012 2v9a2 2 0 01-2 2H8a2 2 0 01-2-2v-4" />
                </svg>
                Quantity
              </label>
              <div className="product-modal__qty-stepper">
                <button
                  className="product-modal__qty-btn"
                  onClick={() => setBulkQty((q) => Math.max(product.minQty || 1, q - 5))}
                  disabled={justAdded || bulkQty <= (product.minQty || 1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <input
                  type="number"
                  id={`modal-qty-${product.id}`}
                  className="product-modal__qty-input"
                  value={bulkQty}
                  min={product.minQty || 1}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10);
                    if (!isNaN(v) && v >= 0) setBulkQty(v);
                  }}
                  disabled={justAdded}
                />
                <button
                  className="product-modal__qty-btn"
                  onClick={() => setBulkQty((q) => q + 5)}
                  disabled={justAdded}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <span className="product-modal__hint">Min. order: {product.minQty || 1} units</span>
              {canAdd && (
                <p className="product-modal__subtotal">
                  Subtotal: ₹{(product.price * bulkQty).toLocaleString("en-IN")}
                </p>
              )}
            </div>
          )}

          {/* Add to Bag */}
          <div className="product-modal__action">
            <button
              className={`product-modal__add-btn${justAdded ? " added" : ""}`}
              onClick={handleAddToCart}
              disabled={!canAdd || justAdded}
              id={`modal-add-to-cart-${product.id}`}
            >
              {justAdded ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Added to Bag
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                  {isCorporate ? `Add ${bulkQty} to Bag` : "Add to Bag"}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
