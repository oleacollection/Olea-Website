import { useEffect, useRef } from "react";
import { corporateGiftingProducts, personalGiftingProducts } from "../data/products";
import GiftingProductCard from "./GiftingProductCard";

export default function GiftingProductGrid({ categoryId, onOpenModal, onBack }) {
  const gridRef = useRef(null);

  const products =
    categoryId === "corporate-gifting"
      ? corporateGiftingProducts
      : personalGiftingProducts;

  const sectionTitle =
    categoryId === "corporate-gifting"
      ? "Corporate Gifting"
      : "Personal Gifting";

  const sectionSubtitle =
    categoryId === "corporate-gifting"
      ? "Premium bulk gifts that leave lasting impressions."
      : "Thoughtful, customised gifts made just for them.";

  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [categoryId]);

  return (
    <section className="products-section gifting-section" id="category-content">
      {/* Back button */}
      <button
        className="gifting-back-btn"
        onClick={onBack}
        id="back-to-categories"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Collections
      </button>

      <h2 className="products-section__title">{sectionTitle}</h2>
      <p className="products-section__subtitle">{sectionSubtitle}</p>

      {categoryId === "corporate-gifting" && (
        <div className="gifting-info-banner">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>All corporate orders are fulfilled in bulk. Set the quantity you need for each item.</span>
        </div>
      )}

      {categoryId === "personal-gifting" && (
        <div className="gifting-info-banner gifting-info-banner--personal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
          <span>Every item is made to order. Add your personalisation text below.</span>
        </div>
      )}

      <div className="product-grid" ref={gridRef}>
        {products.map((product) => (
          <GiftingProductCard
            key={product.id}
            product={product}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </section>
  );
}

