import { useState, useEffect } from "react";

export default function EventNotification({ onOpenModal, onDismiss }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Smooth entrance animation delay
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    setVisible(false);
    setTimeout(() => {
      if (onDismiss) onDismiss();
    }, 300);
  };

  const handleClick = () => {
    onOpenModal();
  };

  return (
    <>
      {/* Dimmed backdrop overlay visible only on mobile screens when active */}
      <div 
        className={`event-notification-overlay ${visible ? "visible" : ""}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        className={`event-notification-popup ${visible ? "visible" : ""}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Pick N Press Event Popup Notification. Click for event details and tickets."
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {/* Retro Title Bar Header */}
        <div className="event-popup-header">
          <div className="event-popup-title">
            <span className="event-badge-icon">🎟️</span>
            <span>EVENT ANNOUNCEMENT</span>
          </div>
          <button
            className="event-popup-close-btn"
            onClick={handleClose}
            aria-label="Close notification"
            title="Dismiss"
          >
            ✕
          </button>
        </div>

        {/* Banner Image Container */}
        <div className="event-popup-body">
          <div className="event-popup-img-wrapper">
            <img
              src="/event-banner.png"
              alt="PICK N PRESS — 16th Aug | Delilah's Cafe. DIY Tote & Patch Event. Tickets from ₹600"
              className="event-popup-img"
              loading="eager"
            />
            <div className="event-popup-hover-overlay">
              <span className="event-popup-cta-btn">
                <span>RE-BOOK / BUY TICKETS</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>

          <div className="event-popup-footer-bar">
            <span className="event-pulse-dot"></span>
            <span className="event-footer-text">Delilah's Cafe • 16th Aug • Pre-book Perks</span>
          </div>
        </div>
      </div>
    </>
  );
}
