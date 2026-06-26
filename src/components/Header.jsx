import { useEffect, useRef, useState } from "react";
import { categories } from "../data/products";
import { mainCategories } from "../data/products";

export default function Header({
  heroVisible,
  activeCategory,
  onCategoryChange,
  activeMainCategory,
  onBackToCategories,
}) {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!heroVisible) {
      const t = setTimeout(() => setShow(true), 50);
      return () => clearTimeout(t);
    } else {
      setShow(false);
    }
  }, [heroVisible]);

  // Scroll active pill into view on mobile
  useEffect(() => {
    if (!navRef.current || !show) return;
    const activeBtn = navRef.current.querySelector(".pill-nav__item.active");
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory, show]);

  const currentMainCat = mainCategories.find(
    (c) => c.id === activeMainCategory
  );

  return (
    <header className={`site-header${show ? " visible" : ""}`} id="site-header">
      <div className="site-header__inner">
        {/* Left: Brand */}
        <div className="site-header__brand">
          <img src="/logo.png" alt="Olea" className="site-header__logo" />
          <span className="site-header__name">Olea Collection</span>
        </div>

        {/* Center: Context-dependent navigation */}
        {activeMainCategory === "clothing" ? (
          <nav
            className="site-header__nav"
            ref={navRef}
            aria-label="Clothing subcategories"
          >
            <button
              className="pill-nav__item pill-nav__item--back"
              onClick={onBackToCategories}
              aria-label="Back to categories"
              id="header-back-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`pill-${cat.id}`}
                className={`pill-nav__item${activeCategory === cat.id ? " active" : ""}`}
                onClick={() => onCategoryChange(cat.id)}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        ) : activeMainCategory ? (
          <nav className="site-header__nav site-header__nav--minimal" aria-label="Navigation">
            <button
              className="pill-nav__item pill-nav__item--back"
              onClick={onBackToCategories}
              aria-label="Back to categories"
              id="header-back-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back
            </button>
            <span className="site-header__current-category">
              {currentMainCat?.label}
            </span>
          </nav>
        ) : (
          <nav className="site-header__nav site-header__nav--minimal" aria-label="Navigation">
            <span className="site-header__current-category">Collections</span>
          </nav>
        )}

        {/* Right: Tagline (desktop only) */}
        <span className="site-header__tagline">curated for the effortlessly cool</span>
      </div>
    </header>
  );
}
