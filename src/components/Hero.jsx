export default function Hero() {
  return (
    <section className="hero" id="hero">
      <img
        src="/logo.png"
        alt="Olea Collection logo"
        className="hero__logo"
      />
      <h1 className="hero__brand">OLEA</h1>
      <p className="hero__tagline">Gifts that slay, Your way</p>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
