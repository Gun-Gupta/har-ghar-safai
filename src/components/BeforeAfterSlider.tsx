"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, SlidersHorizontal, Check } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTab, setActiveTab] = useState<"living" | "kitchen" | "mandir">("living");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const tabData = {
    living: {
      title: "Living Room & Italian Marble Floor",
      beforeLabel: "Before: Dust Build-up & Scratched Polish",
      afterLabel: "After: Diamond Buffed & Hospital-Sanitized",
      beforeImage: "/images/sunlit-interior.jpg",
      afterImage: "/images/hero-cleaner.jpg",
      points: [
        "Floor crystallization mirror finish achieved",
        "Deep fabric steam extraction removed all dust mites",
        "Chandelier crystals meticulously wiped",
      ],
    },
    kitchen: {
      title: "Modular Kitchen & Chimney Detailing",
      beforeLabel: "Before: Sticky Grease & Carbon Residue",
      afterLabel: "After: Sparkling Clean & Food-Safe Sanitized",
      beforeImage: "/images/cleaning-supplies.jpg",
      afterImage: "/images/kitchen-luxury.jpg",
      points: [
        "100% degreased chimney baffles and exhaust ducts",
        "Food-safe antibacterial wipe-down on all granite counters",
        "Stainless steel sink descaled and buffed",
      ],
    },
    mandir: {
      title: "Pooja Room & Festive Sanctuary",
      beforeLabel: "Before: Oil Stains & Tarnished Brass Diyas",
      afterLabel: "After: Gleaming Silverware & Pristine Sanctum",
      beforeImage: "/images/sunlit-interior.jpg",
      afterImage: "/images/diwali-cleaning.jpg",
      points: [
        "Traditional brass polishing restored heritage shine",
        "Marble pooja mandap marble deep-buffed with care",
        "Complimentary organic camphor & sandalwood purification",
      ],
    },
  };

  const current = tabData[activeTab];

  return (
    <section
      id="before-after"
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        backgroundColor: "#FAF6F0",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px auto" }}>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#8E8781",
              display: "block",
              marginBottom: "8px",
            }}
          >
            REAL TRANSFORMATIONS
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#1E1C1A",
              lineHeight: "1.2",
              marginBottom: "12px",
            }}
          >
            Witness The <em>Difference</em>
          </h2>
          <p style={{ color: "#66615C", fontSize: "0.98rem" }}>
            Slide to compare untouched spaces with our hospital-grade festive restoration.
          </p>
        </div>

        {/* Tab switchers */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          {[
            { id: "living", label: "Living & Marble Polish" },
            { id: "kitchen", label: "Kitchen & Chimney" },
            { id: "mandir", label: "Pooja Room & Brass Diyas" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                border: activeTab === tab.id ? "1.5px solid #1E1C1A" : "1px solid rgba(0,0,0,0.1)",
                backgroundColor: activeTab === tab.id ? "#1E1C1A" : "#FFFFFF",
                color: activeTab === tab.id ? "#FFFFFF" : "#57524E",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Slider Box */}
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            padding: "20px",
            border: "1px solid rgba(214, 184, 160, 0.4)",
            boxShadow: "0 20px 45px rgba(30, 28, 26, 0.06)",
          }}
        >
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            style={{
              position: "relative",
              width: "100%",
              height: "460px",
              borderRadius: "18px",
              overflow: "hidden",
              cursor: "ew-resize",
              userSelect: "none",
            }}
          >
            {/* After Image (Full width background) */}
            <div style={{ position: "absolute", inset: 0 }}>
              <Image
                src={current.afterImage}
                alt={current.afterLabel}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: "cover" }}
              />
              {/* After Tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  backgroundColor: "rgba(16, 185, 129, 0.9)",
                  color: "#FFFFFF",
                  backdropFilter: "blur(6px)",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                ✨ AFTER: HAR GHAR SAFAI CLEAN
              </div>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: `${sliderPos}%`,
                overflow: "hidden",
                borderRight: "2px solid #FFFFFF",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "920px",
                  height: "100%",
                  filter: "contrast(88%) brightness(85%) sepia(20%)", // Authentic dusty/uncleaned tint
                }}
              >
                <Image
                  src={current.beforeImage}
                  alt={current.beforeLabel}
                  fill
                  sizes="(max-width: 900px) 100vw, 900px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Before Tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgba(30, 28, 26, 0.85)",
                  color: "#FFFFFF",
                  backdropFilter: "blur(6px)",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                BEFORE: UNTREATED
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                transform: "translateX(-50%)",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1E1C1A",
                }}
              >
                <SlidersHorizontal size={18} />
              </div>
            </div>
          </div>

          {/* Bottom Bullet Points */}
          <div
            style={{
              paddingTop: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {current.points.map((pt, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#44403C" }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#FEF3C7",
                    color: "#D97706",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Check size={13} strokeWidth={3} />
                </div>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
