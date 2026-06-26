// ─── WhatsApp Order Utility ───
// Change this to the store owner's phone number (with country code, no +)
const OWNER_PHONE = "917428281008";

/**
 * Format cart items into a WhatsApp-friendly order message
 */
export function generateOrderMessage(cartItems, total) {
  const lines = cartItems.map((item) => {
    const lineTotal = item.product.price * item.quantity;
    return `${item.quantity}× ${item.product.name} (${item.size}) — ₹${lineTotal.toLocaleString("en-IN")}`;
  });

  return [
    "🫒 *Olea Collection Order*",
    "━━━━━━━━━━━━━━━━━━━━",
    ...lines,
    "━━━━━━━━━━━━━━━━━━━━",
    `*Total: ₹${total.toLocaleString("en-IN")}*`,
    "",
    "📍 Please share delivery details:",
    "Name:",
    "Address:",
    "Phone:",
  ].join("\n");
}

/**
 * Open WhatsApp with pre-filled order message
 */
export function openWhatsApp(cartItems, total) {
  const message = generateOrderMessage(cartItems, total);
  const url = `https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
