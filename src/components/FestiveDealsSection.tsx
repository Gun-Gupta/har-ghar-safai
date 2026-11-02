"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Check, Gift, Copy, ArrowRight, Shield, Flame, HeartHandshake } from "lucide-react";
import confetti from "canvas-confetti";

export default function FestiveDealsSection({
  onBookClick,
}: {
  onBookClick: (promo?: string) => void;
}) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.4 },
      colors: ["#D97706", "#F59E0B", "#FDE68A", "#BE185D", "#EC4899"],
    });
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section
      id="festive-deals"
      style={{
        paddingTop: "60px",
        paddingBottom: "80px",
        backgroundColor: "#F7ECE1", // Warm festive peach tint
        borderTop: "1px solid rgba(214, 184, 160, 0.4)",
        borderBottom: "1px solid rgba(214, 184, 160, 0.4)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "720px",
            margin: "0 auto 52px auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(217, 119, 6, 0.12)",
              color: "#B45309",
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "16px",
            }}
          >
            <Sparkles size={14} />
            <span>Seasonal Celebrations Showcase</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)",
              lineHeight: "1.18",
              marginBottom: "16px",
              color: "#1E1C1A",
            }}
          >
            Exclusive Offers for <em>Diwali</em> & <em>Shaadi</em> Season
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#66615C",
              lineHeight: "1.7",
            }}
          >
            Welcome guests, relatives, and prosperity into an immaculate home. Discover our handcrafted festive packages with complimentary royal perks and limited-time savings.
          </p>
        </div>

        {/* 2 Big Festive Offer Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "36px",
          }}
        >
          {/* CARD 1: DIWALI DHAMAKA DEEP CLEAN */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 18px 45px rgba(217, 119, 6, 0.1)",
              border: "1.5px solid rgba(217, 119, 6, 0.3)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="festive-card"
          >
            {/* Image Header with user's uploaded Diwali photo */}
            <div style={{ position: "relative", height: "280px", width: "100%" }}>
              <Image
                src="/images/diwali-cleaning.jpg"
                alt="Traditional Indian Diwali home cleaned with rangoli, marigold flowers and lanterns"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />

              {/* Top Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  left: "18px",
                  backgroundColor: "#D97706",
                  color: "#FFFFFF",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 4px 14px rgba(217, 119, 6, 0.4)",
                }}
              >
                <Flame size={14} />
                SHUBH DEEPAWALI SPECIAL
              </div>

              {/* Savings Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "18px",
                  right: "18px",
                  backgroundColor: "rgba(30, 28, 26, 0.9)",
                  backdropFilter: "blur(8px)",
                  color: "#FBBF24",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                }}
              >
                FLAT 35% OFF
              </div>
            </div>

            {/* Card Content */}
            <div style={{ padding: "32px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "#1E1C1A",
                  }}
                >
                  Diwali 360° <em>Sanctuary</em> Clean
                </h3>
              </div>

              <p
                style={{
                  fontSize: "0.93rem",
                  color: "#66615C",
                  lineHeight: "1.65",
                  marginBottom: "20px",
                }}
              >
                A sacred, whole-house deep cleanse crafted to invite Goddess Lakshmi into an immaculate, fragrant home. Includes top-to-bottom dusting, scrub, and polish.
              </p>

              {/* Key Deliverables */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#3F3A36" }}>
                  <Check size={16} color="#D97706" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span><strong>Kitchen Chimney & Baffle Filters:</strong> Complete grease & carbon breakdown.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#3F3A36" }}>
                  <Check size={16} color="#D97706" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span><strong>Living & Dining Steam Shampoo:</strong> Fabric sofas, carpets & curtains sterilized.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#3F3A36" }}>
                  <Check size={16} color="#D97706" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span><strong>Chandeliers & Fan Skirting:</strong> Microfiber static de-dusting of high-reach areas.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#3F3A36" }}>
                  <Check size={16} color="#D97706" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span><strong>Pooja Room & Balcony:</strong> Floor deep-scrubbing and marble restoration.</span>
                </div>
              </div>

              {/* Special Diwali Bonus Box */}
              <div
                style={{
                  backgroundColor: "rgba(217, 119, 6, 0.08)",
                  border: "1px dashed #D97706",
                  borderRadius: "14px",
                  padding: "14px 18px",
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Gift size={24} color="#D97706" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: "0.84rem", color: "#92400E", lineHeight: "1.5" }}>
                  <strong>FESTIVE BONUS:</strong> Free traditional Brass Diya & Silver utensil restoration polish + complimentary organic camphor room mist!
                </div>
              </div>

              {/* Pricing & CTA */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.78rem", color: "#8E8781", textTransform: "uppercase" }}>Festive Price</span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontSize: "1.7rem", fontWeight: 800, color: "#1E1C1A" }}>₹3,899</span>
                    <span style={{ fontSize: "0.95rem", color: "#9CA3AF", textDecoration: "line-through" }}>₹5,999</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => handleCopy("DIWALI35")}
                    style={{
                      background: "#FDF8F3",
                      border: "1px solid #D97706",
                      color: "#B45309",
                      padding: "10px 14px",
                      borderRadius: "9999px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {copiedCode === "DIWALI35" ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                    DIWALI35
                  </button>

                  <button
                    onClick={() => onBookClick("DIWALI35")}
                    className="btn btn-dark"
                    style={{ padding: "10px 22px", fontSize: "0.88rem" }}
                  >
                    <span>Book Slot</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: SHAADI SEASON WEDDING GLOW */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 18px 45px rgba(225, 29, 72, 0.08)",
              border: "1.5px solid rgba(225, 29, 72, 0.3)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="festive-card"
          >
            {/* Image Header with generated opulent Indian wedding home photo */}
            <div style={{ position: "relative", height: "280px", width: "100%" }}>
              <Image
                src="/images/shaadi-cleaning.jpg"
                alt="Luxurious Indian home with crystal chandeliers and floral arch prepared for wedding guests"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />

              {/* Top Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  left: "18px",
                  backgroundColor: "#E11D48",
                  color: "#FFFFFF",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 4px 14px rgba(225, 29, 72, 0.4)",
                }}
              >
                <HeartHandshake size={14} />
                BAND BAAJA BARAAT READY
              </div>

              {/* Savings Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "18px",
                  right: "18px",
                  backgroundColor: "rgba(30, 28, 26, 0.9)",
                  backdropFilter: "blur(8px)",
                  color: "#FDA4AF",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                }}
              >
                SAVE ₹3,500 FLAT
              </div>
            </div>

            {/* Card Content */}
            <div style={{ padding: "32px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "#1E1C1A",
                  }}
                >
                  Shaadi <em>Royal Palace</em> Makeover
                </h3>
              </div>

              <p
                style={{
                  fontSize: "0.93rem",
                  color: "#66615C",
                  lineHeight: "1.65",
                  marginBottom: "20px",
                }}
              >
                Designed for welcoming wedding guests, hosting intimate sangeet/mehendi at home, and total post-celebration stress-free recovery.
              </p>

              {/* Key Deliverables */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#3F3A36" }}>
                  <Check size={16} color="#E11D48" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span><strong>Italian Marble Diamond Polish:</strong> High-sheen mirror reflection buffing.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#3F3A36" }}>
                  <Check size={16} color="#E11D48" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span><strong>Bridal Suite & Guest Rooms:</strong> Deep mattress anti-allergen steam sterilization.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#3F3A36" }}>
                  <Check size={16} color="#E11D48" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span><strong>Vanity, Mirrors & Glass:</strong> Streak-free crystal clarity for bridal photography.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#3F3A36" }}>
                  <Check size={16} color="#E11D48" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span><strong>Post-Wedding Event Reset:</strong> Quick removal of haldi, glitter, food stains & flowers.</span>
                </div>
              </div>

              {/* Special Shaadi Bonus Box */}
              <div
                style={{
                  backgroundColor: "rgba(225, 29, 72, 0.08)",
                  border: "1px dashed #E11D48",
                  borderRadius: "14px",
                  padding: "14px 18px",
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Gift size={24} color="#E11D48" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: "0.84rem", color: "#9F1239", lineHeight: "1.5" }}>
                  <strong>WEDDING PERK:</strong> Includes 1 Free Post-Event Touch-Up Visit (within 7 days of wedding) + Mogra & Royal Rose floor aromatic treatment!
                </div>
              </div>

              {/* Pricing & CTA */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.78rem", color: "#8E8781", textTransform: "uppercase" }}>Full Package</span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontSize: "1.7rem", fontWeight: 800, color: "#1E1C1A" }}>₹7,499</span>
                    <span style={{ fontSize: "0.95rem", color: "#9CA3AF", textDecoration: "line-through" }}>₹10,999</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => handleCopy("BANDBAAJA")}
                    style={{
                      background: "#FFF1F2",
                      border: "1px solid #E11D48",
                      color: "#BE123C",
                      padding: "10px 14px",
                      borderRadius: "9999px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {copiedCode === "BANDBAAJA" ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                    BANDBAAJA
                  </button>

                  <button
                    onClick={() => onBookClick("BANDBAAJA")}
                    className="btn btn-dark"
                    style={{ padding: "10px 22px", fontSize: "0.88rem" }}
                  >
                    <span>Reserve Crew</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .festive-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 60px rgba(30, 28, 26, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
