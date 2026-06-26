import { useCart } from "../context/CartContext";

export default function CartFAB({ onClick }) {
  const { cartCount } = useCart();

  return (
    <button
      className="cart-fab"
      onClick={onClick}
      aria-label={`Shopping bag with ${cartCount} items`}
      id="cart-fab"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      {cartCount > 0 && (
        <span className="cart-fab__badge" key={cartCount}>
          {cartCount}
        </span>
      )}
    </button>
  );
}
