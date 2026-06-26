import { useState, useEffect, useRef, useCallback } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategorySelector from "./components/CategorySelector";
import ProductGrid from "./components/ProductGrid";
import EmptyCatalogue from "./components/EmptyCatalogue";
import CartDrawer from "./components/CartDrawer";
import CartFAB from "./components/CartFAB";
import Footer from "./components/Footer";
import GiftBoxAnimation from "./components/GiftBoxAnimation";

export default function App() {
  const [activeMainCategory, setActiveMainCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [giftAnimation, setGiftAnimation] = useState(null);
  const heroRef = useRef(null);

  // Track hero visibility with IntersectionObserver
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Called by ProductCard when adding to bag
  const handleGiftAnimation = useCallback((animationData) => {
    setGiftAnimation(animationData);
  }, []);

  // Called when gift box animation completes
  const handleGiftComplete = useCallback(() => {
    setGiftAnimation(null);
  }, []);

  // Handle main category selection
  const handleSelectMainCategory = useCallback((categoryId) => {
    setActiveMainCategory(categoryId);
    setActiveCategory("all");
  }, []);

  // Handle going back to category selector
  const handleBackToCategories = useCallback(() => {
    setActiveMainCategory(null);
    setActiveCategory("all");

    setTimeout(() => {
      const selector = document.getElementById("category-selector");
      if (selector) {
        selector.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }, []);

  return (
    <CartProvider>
      <div className="app">
        <Header
          heroVisible={heroVisible}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          activeMainCategory={activeMainCategory}
          onBackToCategories={handleBackToCategories}
        />
        <div ref={heroRef}>
          <Hero />
        </div>

        {/* Category selector — always visible below hero */}
        {!activeMainCategory && (
          <CategorySelector onSelectCategory={handleSelectMainCategory} />
        )}

        {/* Clothing: show product grid with subcategory filters */}
        {activeMainCategory === "clothing" && (
          <div id="category-content">
            <ProductGrid
              activeCategory={activeCategory}
              onGiftAnimation={handleGiftAnimation}
            />
          </div>
        )}

        {/* Corporate/Personal Gifting: show empty catalogue */}
        {(activeMainCategory === "corporate-gifting" ||
          activeMainCategory === "personal-gifting") && (
          <EmptyCatalogue
            categoryId={activeMainCategory}
            onBack={handleBackToCategories}
          />
        )}

        <Footer />
        <CartFAB onClick={() => setCartOpen(true)} />
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
        />
        <GiftBoxAnimation
          animationData={giftAnimation}
          onComplete={handleGiftComplete}
        />
      </div>
    </CartProvider>
  );
}
