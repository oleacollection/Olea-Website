import { useEffect, useRef, useState } from "react";
import { categories } from "../data/products";

export default function Header({ heroVisible, activeCategory, onCategoryChange }) {
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

  return (
    <header className={`site-header${show ? " visible" : ""}`} id="site-header">
      <div className="site-header__inner">
        {/* Left: Brand */}
        <div className="site-header__brand">
          <img src="/logo.png" alt="Olea" className="site-header__logo" />
          <span className="site-header__name">Olea Collection</span>
        </div>

        {/* Center: Category pills */}
        <nav
          className="site-header__nav"
          ref={navRef}
          aria-label="Product categories"
        >
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

        {/* Right: Tagline (desktop only) */}
        <span className="site-header__tagline">curated for the effortlessly cool</span>
      </div>
    </header>
  );
}
