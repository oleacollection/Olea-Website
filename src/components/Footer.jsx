export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <h2 className="footer__brand">Olea Collection</h2>
      <p className="footer__tagline">gifts that slay, your way</p>

      <nav className="footer__links" aria-label="Footer links">
        <a
          href="https://www.instagram.com/theoleacollection/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Instagram
        </a>
        <a href="mailto:olea.customercare@gmail.com" className="footer__link">
          Email
        </a>
        <a
          href="https://wa.me/917428281008"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          WhatsApp
        </a>
      </nav>

      <div className="footer__divider" />

      <p className="footer__copy">
        © {new Date().getFullYear()} Olea Collection. All rights reserved.
      </p>
    </footer>
  );
}
