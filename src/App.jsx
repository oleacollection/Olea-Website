import { useState, useEffect, useRef, useCallback } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import CategorySelector from "./components/CategorySelector"; // Hidden: re-enable when other categories are ready
import ProductGrid from "./components/ProductGrid";
import GiftingProductGrid from "./components/GiftingProductGrid";
import CartDrawer from "./components/CartDrawer";
import CartFAB from "./components/CartFAB";
import Footer from "./components/Footer";
import GiftBoxAnimation from "./components/GiftBoxAnimation";
import ProductModal from "./components/ProductModal";

export default function App() {
  const [activeMainCategory, setActiveMainCategory] = useState("clothing");
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [giftAnimation, setGiftAnimation] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
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
  // Hidden: re-enable when other categories are ready
  // const handleBackToCategories = useCallback(() => {
  //   setActiveMainCategory(null);
  //   setActiveCategory("all");
  //   setTimeout(() => {
  //     const selector = document.getElementById("category-selector");
  //     if (selector) {
  //       selector.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   }, 100);
  // }, []);

  return (
    <CartProvider>
      <div className="app">
        <Header
          heroVisible={heroVisible}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          activeMainCategory={activeMainCategory}
          onBackToCategories={null}
          onMainCategoryChange={handleSelectMainCategory}
        />
        <div ref={heroRef}>
          <Hero />
        </div>

        {/* Category selector — hidden until other categories are ready */}
        {/* {!activeMainCategory && (
          <CategorySelector onSelectCategory={handleSelectMainCategory} />
        )} */}

        {/* Clothing: show product grid with subcategory filters */}
        {activeMainCategory === "clothing" && (
          <div id="category-content">
            <ProductGrid
              activeCategory={activeCategory}
              onOpenModal={setSelectedProduct}
            />
          </div>
        )}

        {/* Corporate/Personal Gifting: show gifting product grid */}
        {(activeMainCategory === "corporate-gifting" ||
          activeMainCategory === "personal-gifting") && (
          <GiftingProductGrid
            categoryId={activeMainCategory}
            onOpenModal={setSelectedProduct}
            onBack={handleBackToCategories}
          />
        )}

        <Footer />
        <CartFAB onClick={() => setCartOpen(true)} />
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
        />
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onGiftAnimation={handleGiftAnimation}
          />
        )}
        <GiftBoxAnimation
          animationData={giftAnimation}
          onComplete={handleGiftComplete}
        />
      </div>
    </CartProvider>
  );
}
