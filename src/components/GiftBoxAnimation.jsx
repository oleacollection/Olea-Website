import { useEffect, useState, useRef } from "react";

/**
 * GiftBoxAnimation
 *
 * Flow:
 * 1. Product image clone flies from its source position to the center gift box
 * 2. Gift box appears (lid open) in center of screen
 * 3. Image shrinks into the box
 * 4. Lid closes with a satisfying snap
 * 5. Small celebration particles burst
 * 6. Callback fires (opens cart drawer)
 */
export default function GiftBoxAnimation({ animationData, onComplete }) {
  const [phase, setPhase] = useState("idle"); // idle | flying | landing | closing | celebrating | done
  const [flyStyle, setFlyStyle] = useState({});
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!animationData) {
      setPhase("idle");
      return;
    }

    // Phase 1: Flying — clone moves from source to center
    const { sourceRect, productImage } = animationData;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Start position = source element
    setFlyStyle({
      backgroundImage: `url(${productImage})`,
      top: sourceRect.top,
      left: sourceRect.left,
      width: sourceRect.width,
      height: sourceRect.height,
      borderRadius: "12px",
      opacity: 1,
      transform: "scale(1)",
    });
    setPhase("flying");

    // After a frame, animate to center
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFlyStyle({
          backgroundImage: `url(${productImage})`,
          top: centerY - 40,
          left: centerX - 30,
          width: 60,
          height: 80,
          borderRadius: "8px",
          opacity: 1,
          transform: "scale(1)",
        });
      });
    });

    // Phase 2: Landing — item shrinks into box
    const t1 = setTimeout(() => {
      setPhase("landing");
      setFlyStyle((prev) => ({
        ...prev,
        top: centerY - 10,
        width: 20,
        height: 25,
        opacity: 0,
        transform: "scale(0.3)",
      }));
    }, 600);

    // Phase 3: Closing — lid snaps shut
    const t2 = setTimeout(() => {
      setPhase("closing");
    }, 900);

    // Phase 4: Celebrating — particles burst
    const t3 = setTimeout(() => {
      setPhase("celebrating");
    }, 1200);

    // Phase 5: Done — fade out and callback
    const t4 = setTimeout(() => {
      setPhase("done");
    }, 1800);

    const t5 = setTimeout(() => {
      setPhase("idle");
      onComplete?.();
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [animationData, onComplete]);

  if (phase === "idle") return null;

  return (
    <div
      className={`giftbox-overlay ${phase}`}
      ref={overlayRef}
    >
      {/* Flying product image clone */}
      {(phase === "flying" || phase === "landing") && (
        <div
          className="giftbox-flying-item"
          style={{
            backgroundImage: flyStyle.backgroundImage,
            top: flyStyle.top,
            left: flyStyle.left,
            width: flyStyle.width,
            height: flyStyle.height,
            borderRadius: flyStyle.borderRadius,
            opacity: flyStyle.opacity,
            transform: flyStyle.transform,
          }}
        />
      )}

      {/* Gift Box */}
      <div className={`giftbox ${phase}`}>
        {/* Ribbon */}
        <div className="giftbox__ribbon-v" />
        <div className="giftbox__ribbon-h" />

        {/* Lid */}
        <div className={`giftbox__lid ${phase === "closing" || phase === "celebrating" || phase === "done" ? "closed" : "open"}`}>
          <div className="giftbox__lid-top" />
          <div className="giftbox__lid-bow">
            <div className="giftbox__bow-loop giftbox__bow-loop--left" />
            <div className="giftbox__bow-loop giftbox__bow-loop--right" />
            <div className="giftbox__bow-knot" />
          </div>
        </div>

        {/* Box body */}
        <div className="giftbox__body" />
      </div>

      {/* Celebration particles */}
      {(phase === "celebrating" || phase === "done") && (
        <div className="giftbox-particles">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="giftbox-particle"
              style={{
                "--angle": `${i * 30}deg`,
                "--delay": `${i * 0.03}s`,
                "--distance": `${60 + Math.random() * 50}px`,
                "--color": ["#5C7A4A", "#8FAE7B", "#D4C4A8", "#8B6F4E", "#DDE8D5", "#B8D4A4"][i % 6],
              }}
            />
          ))}
        </div>
      )}

      {/* "Added to bag!" text */}
      {(phase === "celebrating" || phase === "done") && (
        <p className={`giftbox-text ${phase === "done" ? "fade-out" : ""}`}>
          Added to your bag! 🎁
        </p>
      )}
    </div>
  );
}
