import { useState, useEffect, useCallback } from "react";
import { useCart } from "../context/CartContext";
import { openEventWhatsAppBooking } from "../utils/whatsapp";

export default function EventModal({ onClose }) {
  const { addToCart } = useCart();
  const [selectedTier, setSelectedTier] = useState("early"); // 'early', 'general', 'duo'
  const [quantity, setQuantity] = useState(1);
  const [isClosing, setIsClosing] = useState(false);
  const [bookingStep, setBookingStep] = useState("details"); // 'details', 'checkout', 'confirmed'
  const [addedToCartToast, setAddedToCartToast] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [bookingRef, setBookingRef] = useState("");

  const ticketTiers = [
    {
      id: "early",
      name: "Early Bird Pass",
      price: 600,
      badge: "LIMITED SLOTS",
      tag: "Best Value",
      desc: "Includes 1x Canvas Tote Bag + Full Patch Press Access + Cafe Food Voucher.",
    },
    {
      id: "general",
      name: "General Pass",
      price: 800,
      badge: "STANDARD ACCESS",
      desc: "Includes 1x Canvas Tote Bag + Full Patch Press Access + Cafe Food Voucher.",
    },
    {
      id: "duo",
      name: "Duo Pass (For 2)",
      price: 1350,
      badge: "SAVE ₹250",
      desc: "Pass for 2 attendees",
    },
  ];

  const currentTierObj = ticketTiers.find((t) => t.id === selectedTier) || ticketTiers[0];
  const totalPrice = currentTierObj.price * quantity;

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  }, [onClose]);

  // Keyboard navigation & close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleCloseModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceedToCheckout = () => {
    setBookingStep("checkout");
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email address.");
      return;
    }
    const randomRef = "OLEA-PNP-" + Math.floor(100000 + Math.random() * 900000);

    // Launch WhatsApp checkout with pre-filled booking details
    openEventWhatsAppBooking({
      tierName: currentTierObj.name,
      quantity,
      totalPrice,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      bookingRef: randomRef,
    });

    // Close the modal directly after leading to WhatsApp
    handleCloseModal();
  };


  const handleAddToCart = () => {
    const ticketProduct = {
      id: `ticket-${currentTierObj.id}-${Date.now()}`,
      name: `Ticket: ${currentTierObj.name} (Pick N Press Event)`,
      price: currentTierObj.price,
      image: "/event-banner.png",
      category: "Event Ticket",
    };

    addToCart(ticketProduct, `Qty: ${quantity} (${formData.name || "Attendee"})`);
    setAddedToCartToast(true);
    setTimeout(() => setAddedToCartToast(false), 3000);
  };

  return (
    <div
      className={`event-modal-backdrop ${isClosing ? "closing" : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
    >
      <div className={`event-modal-container ${isClosing ? "closing" : ""}`}>
        
        {/* Retro Pink Window Header */}
        <div className="event-modal-window-bar">
          <div className="event-window-left">
            <span className="event-window-icon">💾</span>
            <h2 id="event-modal-title" className="event-window-title">
              EVENT TICKETS — PICK N PRESS
            </h2>
          </div>
          <div className="event-window-controls">
            <button className="event-win-btn win-min" title="Minimize">_</button>
            <button className="event-win-btn win-max" title="Maximize">□</button>
            <button
              className="event-win-btn win-close"
              onClick={handleCloseModal}
              title="Close window"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Retro Menu Bar */}
        <div className="event-modal-menubar">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Image</span>
          <span>Help</span>
        </div>

        {/* Modal Main Content Area */}
        <div className="event-modal-body">
          {bookingStep === "details" && (
            <div className="event-details-layout">
              {/* Left Column: Graphic Banner & Event Details */}
              <div className="event-banner-col">
                <div className="event-graphic-card">
                  <img
                    src="/event-banner.png"
                    alt="Pick N Press Event Graphic"
                    className="event-graphic-img"
                  />
                </div>

                <div className="event-quick-info">
                  <div className="event-info-pill">
                    <span className="info-icon">📅</span>
                    <div>
                      <strong>Date & Time</strong>
                      <p>Saturday, 16th Aug 2026 • 3:00 PM – 7:00 PM</p>
                    </div>
                  </div>

                  <div className="event-info-pill">
                    <span className="info-icon">📍</span>
                    <div>
                      <strong>Venue & Location</strong>
                      <p>Delilah's Cafe, Bandra West, Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Ticket Tiers & Booking Controls */}
              <div className="event-booking-col">
                <div className="event-head-tag">
                  <span className="retro-star">★</span> DIY TOTE & PATCH WORKSHOP
                </div>
                <h1 className="event-main-heading">PICK N PRESS</h1>
                <p className="event-subtitle">
                  Design your custom canvas tote bag live at Delilah's Cafe with hundreds of embroidered patches, press machinery, and artisan food!
                </p>

                {/* Ticket Tier Selection */}
                <div className="ticket-tier-section">
                  <label className="section-label">Select Ticket Tier:</label>
                  <div className="ticket-tier-list">
                    {ticketTiers.map((tier) => (
                      <div
                        key={tier.id}
                        className={`ticket-tier-card ${selectedTier === tier.id ? "selected" : ""}`}
                        onClick={() => setSelectedTier(tier.id)}
                      >
                        <div className="tier-radio">
                          <input
                            type="radio"
                            name="ticketTier"
                            checked={selectedTier === tier.id}
                            onChange={() => setSelectedTier(tier.id)}
                          />
                        </div>
                        <div className="tier-content">
                          <div className="tier-header-row">
                            <h3 className="tier-name">{tier.name}</h3>
                            <span className="tier-price">₹{tier.price}</span>
                          </div>
                          {tier.badge && <span className="tier-badge">{tier.badge}</span>}
                          <p className="tier-desc">{tier.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="quantity-section">
                  <span className="section-label">Number of Tickets:</span>
                  <div className="quantity-control-bar">
                    <button
                      className="qty-btn"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="qty-value">{quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => setQuantity((q) => q + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Order Summary Bar */}
                <div className="total-summary-bar">
                  <div>
                    <span className="total-label">Total Amount:</span>
                    <div className="total-price-display">₹{totalPrice}</div>
                  </div>
                  <button
                    className="event-cta-btn primary"
                    onClick={handleProceedToCheckout}
                  >
                    <span>BUY TICKETS NOW</span>
                    <span className="cta-arrow">»</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Attendee Form / Checkout Details */}
          {bookingStep === "checkout" && (
            <div className="event-checkout-layout">
              <button
                className="event-back-link"
                onClick={() => setBookingStep("details")}
              >
                ← Back to Ticket Selection
              </button>

              <div className="checkout-header">
                <h2>Attendee Registration</h2>
                <p>Complete your booking for <strong>{currentTierObj.name}</strong> ({quantity} Ticket{quantity > 1 ? "s" : ""})</p>
              </div>

              <form onSubmit={handleConfirmBooking} className="attendee-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="checkout-summary-box">
                  <div className="summary-line">
                    <span>{currentTierObj.name} x {quantity}</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="summary-line perk-line">
                    <span>Cafe Food Voucher</span>
                    <span>INCLUDED</span>
                  </div>
                  <div className="summary-line total-final">
                    <strong>Total Payable</strong>
                    <strong>₹{totalPrice}</strong>
                  </div>
                </div>

                <div className="form-action-row">
                  <button
                    type="button"
                    className="event-cta-btn secondary"
                    onClick={handleAddToCart}
                  >
                    🛒 Add Ticket to Bag
                  </button>
                  <button type="submit" className="event-cta-btn primary">
                    💬 BOOK VIA WHATSAPP (₹{totalPrice})
                  </button>
                </div>

                {addedToCartToast && (
                  <div className="cart-toast-banner">
                    ✓ Ticket added to your Olea Shopping Bag!
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
