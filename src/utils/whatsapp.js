// ─── WhatsApp Order Utility ───
// Change this to the store owner's phone number (with country code, no +)
const OWNER_PHONE = "917428281008";

/**
 * Format cart items into a WhatsApp-friendly order message
 */
export function generateOrderMessage(cartItems, total) {
  const lines = cartItems.map((item) => {
    const lineTotal = item.product.price * item.quantity;
    let detail = item.size;
    if (item.meta?.customText) {
      detail = `Custom: "${item.meta.customText}"`;
    } else if (item.meta?.bulkQty) {
      detail = `Bulk: ${item.quantity} units`;
    }
    return `${item.quantity}× ${item.product.name} (${detail}) — ₹${lineTotal.toLocaleString("en-IN")}`;
  });

  return [
    "*Olea Collection Order*",
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

/**
 * Open WhatsApp with pre-filled Pick N Press Event ticket booking message
 */
export function openEventWhatsAppBooking({ tierName, quantity, totalPrice, name, email, phone, bookingRef }) {
  const message = [
    "🎟️ *Pick N Press Event Ticket Booking*",
    "━━━━━━━━━━━━━━━━━━━━",
    `*Event:* PICK N PRESS — DIY Tote & Patch Workshop`,
    `*Date:* Saturday, 16th Aug 2026 (3:00 PM - 7:00 PM)`,
    `*Venue:* Delilah's Cafe, Bandra West, Mumbai`,
    `*Booking Ref:* #${bookingRef}`,
    "━━━━━━━━━━━━━━━━━━━━",
    `*Ticket Tier:* ${tierName}`,
    `*Quantity:* ${quantity}`,
    `*Total Amount:* ₹${totalPrice.toLocaleString("en-IN")}`,
    "━━━━━━━━━━━━━━━━━━━━",
    "👤 *Attendee Details:*",
    `*Name:* ${name}`,
    `*Email:* ${email}`,
    phone ? `*Phone:* ${phone}` : null,
    "",
    "Hi Olea Team! I would like to confirm my ticket booking for the Pick N Press event."
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

