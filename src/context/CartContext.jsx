import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

// ─── Cart item shape: { product, size, quantity, meta? } ───
// meta may contain: { customText } for personal gifting
//                    { bulkQty } for corporate gifting

const STORAGE_KEY = "olea-cart";

function loadCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

// Unique key for a cart line = productId + size
function lineKey(productId, size) {
  return `${productId}__${size}`;
}

function cartReducer(state, action) {
  let next;

  switch (action.type) {
    case "ADD": {
      const key = lineKey(action.product.id, action.size);
      const meta = action.meta || {};
      // For corporate gifting, quantity comes from bulkQty
      const addQty = meta.bulkQty || 1;
      const existing = state.find(
        (item) => lineKey(item.product.id, item.size) === key
      );
      if (existing) {
        next = state.map((item) =>
          lineKey(item.product.id, item.size) === key
            ? { ...item, quantity: item.quantity + addQty, meta: { ...item.meta, ...meta } }
            : item
        );
      } else {
        next = [
          ...state,
          { product: action.product, size: action.size, quantity: addQty, meta },
        ];
      }
      break;
    }

    case "REMOVE": {
      const key = lineKey(action.productId, action.size);
      next = state.filter(
        (item) => lineKey(item.product.id, item.size) !== key
      );
      break;
    }

    case "UPDATE_QTY": {
      const key = lineKey(action.productId, action.size);
      if (action.quantity <= 0) {
        next = state.filter(
          (item) => lineKey(item.product.id, item.size) !== key
        );
      } else {
        next = state.map((item) =>
          lineKey(item.product.id, item.size) === key
            ? { ...item, quantity: action.quantity }
            : item
        );
      }
      break;
    }

    case "CLEAR":
      next = [];
      break;

    default:
      return state;
  }

  saveCart(next);
  return next;
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  // Sync across tabs
  useEffect(() => {
    const handler = (e) => {
      if (e.key === STORAGE_KEY) {
        dispatch({ type: "CLEAR" }); // will re-init from storage on next load
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const addToCart = (product, size, meta) =>
    dispatch({ type: "ADD", product, size, meta });

  const removeFromCart = (productId, size) =>
    dispatch({ type: "REMOVE", productId, size });

  const updateQuantity = (productId, size, quantity) =>
    dispatch({ type: "UPDATE_QTY", productId, size, quantity });

  const clearCart = () => dispatch({ type: "CLEAR" });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
