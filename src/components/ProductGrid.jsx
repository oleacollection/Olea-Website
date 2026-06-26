import { useEffect, useRef } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ activeCategory, onGiftAnimation }) {
  const gridRef = useRef(null);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
  }, [activeCategory]);

  return (
    <section className="products-section" id="products">
      <h2 className="products-section__title">The Collection</h2>
      <p className="products-section__subtitle">
        {activeCategory === "all"
          ? "Every piece, thoughtfully made."
          : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} — hand-picked for you.`}
      </p>

      <div className="product-grid" ref={gridRef}>
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onGiftAnimation={onGiftAnimation}
            />
          ))
        ) : (
          <div className="product-grid__empty">
            <div className="product-grid__empty-icon">🫒</div>
            <p>Nothing here yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
