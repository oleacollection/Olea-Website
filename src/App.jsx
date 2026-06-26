import { useState, useEffect, useRef, useCallback } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import CartFAB from "./components/CartFAB";
import Footer from "./components/Footer";
import GiftBoxAnimation from "./components/GiftBoxAnimation";

export default function App() {
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

  return (
    <CartProvider>
      <div className="app">
        <Header
          heroVisible={heroVisible}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <div ref={heroRef}>
          <Hero />
        </div>
        <ProductGrid
          activeCategory={activeCategory}
          onGiftAnimation={handleGiftAnimation}
        />
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
