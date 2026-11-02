"use client";

import React from "react";
import Image from "next/image";
import { Home, ShieldCheck, Users, ArrowUpRight, Sparkles } from "lucide-react";

export default function ServiceCards({
  onBookClick,
}: {
  onBookClick: (promo?: string, service?: string) => void;
}) {
  const cards = [
    {
      title: "One-Time Deep Cleaning",
      desc: "Complete top-to-bottom scrub, kitchen chimney degreasing, bathroom descaling, and high-power dust extraction for total peace of mind.",
      btnText: "Learn More",
      image: "/images/cleaning-supplies.jpg",
      tag: "Most Popular",
      serviceCode: "one-time",
    },
    {
      title: "Festive & Wedding Glow",
      desc: "Diamond marble polishing, sofa shampooing, crystal chandelier care, and pre-event banquet detailing crafted for grand celebrations.",
      btnText: "Learn More",
      image: "/images/kitchen-luxury.jpg",
      tag: "Seasonal Favorite",
      serviceCode: "festive",
    },
    {
      title: "Commercial & Villa Detailing",
      desc: "Industrial-grade sanitization for bungalows, penthouses, farmhouses, wedding venues, and corporate headquarters with rapid turnaround.",
      btnText: "Learn More",
      image: "/images/sunlit-interior.jpg",
      tag: "Comprehensive",
      serviceCode: "commercial",
    },
  ];

  return (
    <section
      id="services"
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        backgroundColor: "#FAF6F0",
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px auto" }}>
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
            OUR SIGNATURE OFFERINGS
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#1E1C1A",
              lineHeight: "1.2",
            }}
          >
            Tailored Care For Every <em>Sanctuary</em>
          </h2>
        </div>

        {/* 3 Peach Service Cards matching screenshot */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "28px",
            marginBottom: "60px",
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#F7ECE1", // Warm peach/sand card background matching screenshot
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(214, 184, 160, 0.45)",
                boxShadow: "0 10px 30px rgba(30, 28, 26, 0.04)",
                transition: "all 0.3s ease",
              }}
              className="peach-service-card"
            >
              {/* Card Header Content */}
              <div
                style={{
                  padding: "36px 28px 24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.85rem",
                    fontWeight: 500,
                    marginBottom: "14px",
                    color: "#1E1C1A",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#66615C",
                    lineHeight: "1.65",
                    marginBottom: "24px",
                    maxWidth: "280px",
                  }}
                >
                  {card.desc}
                </p>

                {/* White pill Learn More button matching screenshot */}
                <button
                  onClick={() => onBookClick(undefined, card.serviceCode)}
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#1E1C1A",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "10px 28px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 3px 12px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  className="card-pill-btn"
                >
                  <span>{card.btnText}</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Bottom Image matching screenshot */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "230px",
                  marginTop: "auto",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Counter & Stats Bar matching screenshot bottom row */}
        <div
          style={{
            backgroundColor: "#FAF6F0",
            borderTop: "1px solid rgba(29, 26, 24, 0.08)",
            paddingTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Stat 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(217, 119, 6, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#D97706",
              }}
            >
              <Home size={24} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.9rem",
                  fontWeight: 600,
                  color: "#1E1C1A",
                  lineHeight: "1.1",
                }}
              >
                45,800+
              </div>
              <div style={{ fontSize: "0.82rem", color: "#78716C", fontWeight: 500 }}>
                Homes & Venues Cleaned
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#059669",
              }}
            >
              <ShieldCheck size={24} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.9rem",
                  fontWeight: 600,
                  color: "#1E1C1A",
                  lineHeight: "1.1",
                }}
              >
                100%
              </div>
              <div style={{ fontSize: "0.82rem", color: "#78716C", fontWeight: 500 }}>
                Service Satisfaction Guarantee
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(225, 29, 72, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#E11D48",
              }}
            >
              <Users size={24} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.9rem",
                  fontWeight: 600,
                  color: "#1E1C1A",
                  lineHeight: "1.1",
                }}
              >
                4,920+
              </div>
              <div style={{ fontSize: "0.82rem", color: "#78716C", fontWeight: 500 }}>
                Happy Festive Families
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .peach-service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(30, 28, 26, 0.08) !important;
        }
        .card-pill-btn:hover {
          background-color: #1E1C1A !important;
          color: #FFFFFF !important;
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
