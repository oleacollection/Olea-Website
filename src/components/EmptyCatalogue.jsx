import { mainCategories } from "../data/products";

export default function EmptyCatalogue({ categoryId, onBack }) {
  const category = mainCategories.find((c) => c.id === categoryId);

  if (!category) return null;

  return (
    <section className="empty-catalogue" id="category-content">
      <div className="empty-catalogue__inner">
        {/* Decorative background elements */}
        <div className="empty-catalogue__bg-circle empty-catalogue__bg-circle--1" />
        <div className="empty-catalogue__bg-circle empty-catalogue__bg-circle--2" />

        <div className="empty-catalogue__content">
          <span className="empty-catalogue__badge">Coming Soon</span>
          <h2 className="empty-catalogue__title">{category.label}</h2>
          <p className="empty-catalogue__tagline">{category.tagline}</p>

          <div className="empty-catalogue__divider">
            <span className="empty-catalogue__olive">🫒</span>
          </div>

          <p className="empty-catalogue__description">
            We're carefully curating this collection to bring you something truly
            special. Stay tuned for a range of{" "}
            {categoryId === "corporate-gifting"
              ? "premium corporate gifts that leave lasting impressions."
              : "personal gifts crafted with love and attention to detail."}
          </p>

          <button
            className="empty-catalogue__back-btn"
            onClick={onBack}
            id="back-to-categories"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Collections
          </button>
        </div>
      </div>
    </section>
  );
}
