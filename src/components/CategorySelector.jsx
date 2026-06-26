import { useEffect, useRef } from "react";
import { mainCategories } from "../data/products";

export default function CategorySelector({ onSelectCategory }) {
  const sectionRef = useRef(null);

  // Scroll-reveal animation
  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".category-panel");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleSelect = (categoryId) => {
    onSelectCategory(categoryId);

    setTimeout(() => {
      const content = document.getElementById("category-content");
      if (content) {
        content.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section className="category-selector" id="category-selector" ref={sectionRef}>
      <div className="category-selector__header">
        <h2 className="category-selector__title">Explore Our Collections</h2>
        <p className="category-selector__subtitle">
          Three worlds of thoughtful design, one curated experience.
        </p>
      </div>

      <div className="category-selector__grid">
        {mainCategories.map((cat, index) => (
          <button
            key={cat.id}
            className="category-panel"
            id={`category-panel-${cat.id}`}
            style={{ "--panel-index": index }}
            onClick={() => handleSelect(cat.id)}
            aria-label={`Browse ${cat.label}`}
          >
            <div className="category-panel__image-wrap">
              <img
                src={cat.image}
                alt={cat.label}
                className="category-panel__image"
                loading="lazy"
              />
              <div className="category-panel__overlay" />
            </div>

            <div className="category-panel__content">
              <span className="category-panel__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="category-panel__label">{cat.label}</h3>
              <p className="category-panel__tagline">{cat.tagline}</p>
              <span className="category-panel__cta">
                Explore
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
