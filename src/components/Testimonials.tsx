"use client";

import React from "react";
import { Star, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rohit & Ananya Verma",
      location: "City center , Gwalior",
      service: "Full House Package ",
      text: "Booked the Full House under ₹1,000 package before shifting into our 2BHK rental. The 2-person crew spent 4 hours deep cleaning every corner, wardrobes, and windows. Paying after inspecting everything gave us 100% peace of mind. Truly unbeatable value!",
      rating: 5,
      date: "October 2026",
      tag: "Verified Booking",
    },
    {
      name: "Pooja Sharma",
      location: "Shinde ki Chawni, Gwalior",
      service: "Kitchen Deep Clean ",
      text: "My kitchen chimney and tiled backsplash had heavy oil grease from festive cooking. At just ₹199, I was skeptical, but the cleaners used industrial degreasers and made my kitchen sparkle like brand new. No advance required either!",
      rating: 5,
      date: "October 2026",
      tag: "Kitchen Specialist",
    },
    {
      name: "Amit Singhal",
      location: "City center , Gwalior",
      service: "2 Bathrooms + 1 Bedroom ",
      text: "The hard water scaling on our bathroom glass and chrome taps was completely removed. Hardworking, polite staff who arrived right on time with all their own cleaning liquids and microfiber mops. Highly recommend Har Ghar Safai to everyone.",
      rating: 5,
      date: "September 2026",
      tag: "Repeat Customer",
    },
    {
      name: "Meenakshi Sundaram",
      location: "Thatipur , Gwalior",
      service: "Custom Service (Balcony + Sofa)",
      text: "Requested custom service for pigeon netting cleanup, balcony high-pressure wash, and 5-seater sofa shampooing. The quote given on WhatsApp was transparent with zero hidden costs. Excellent service!",
      rating: 5,
      date: "September 2026",
      tag: "Custom Service",
    },
  ];

  return (
    <section
      id="reviews"
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        backgroundColor: "#FAF6F0",
        borderTop: "1px solid rgba(29, 26, 24, 0.08)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 46px auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(217, 119, 6, 0.1)",
              color: "#B45309",
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "12px",
            }}
          >
            <Sparkles size={13} />
            <span>REAL CUSTOMER REVIEWS</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)",
              color: "#1E1C1A",
              lineHeight: "1.22",
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            Loved by Homes Across <em>Gwalior &amp; Beyond</em>
          </h2>

          <p style={{ color: "#57524E", fontSize: "0.95rem", lineHeight: "1.6" }}>
            See why thousands of homeowners trust Har Ghar Safai for honest flat pricing, zero-advance booking, and spotless results.
          </p>

          {/* Social Proof Stat Bar */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
              marginTop: "16px",
              padding: "8px 20px",
              borderRadius: "9999px",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(214, 184, 160, 0.6)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#1E1C1A",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ display: "flex", gap: "2px", color: "#F59E0B" }}>
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={15} fill="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>
              <span><strong>4.9 / 5</strong> Average Rating</span>
            </div>
            <span style={{ color: "#D97706" }}>•</span>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#15803D" }}>
              <ShieldCheck size={16} />
              <span>100% Pay After Service</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {reviews.map((rev, i) => (
            <article
              key={i}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "28px 24px",
                border: "1px solid rgba(214, 184, 160, 0.55)",
                boxShadow: "0 8px 24px rgba(30, 28, 26, 0.04)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              className="review-card"
            >
              {/* Top Row: Service Tag & Rating */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    color: "#92400E",
                    backgroundColor: "#FEF3C7",
                    border: "1px solid rgba(217, 119, 6, 0.2)",
                    padding: "3px 10px",
                    borderRadius: "9999px",
                  }}
                >
                  {rev.service}
                </span>

                <div style={{ display: "flex", gap: "2px", color: "#F59E0B" }}>
                  {[...Array(rev.rating)].map((_, s) => (
                    <Star key={s} size={14} fill="#F59E0B" stroke="#F59E0B" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "#44403C",
                  lineHeight: "1.65",
                  marginBottom: "20px",
                  flex: 1,
                }}
              >
                &ldquo;{rev.text}&rdquo;
              </p>

              {/* Author & Verification Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                  fontSize: "0.82rem",
                  gap: "10px",
                }}
              >
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#1E1C1A",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {rev.name}
                    </span>
                    <span title="Verified Customer" style={{ display: "inline-flex", flexShrink: 0 }}>
                      <CheckCircle2 size={14} color="#16A34A" />
                    </span>
                  </div>
                  <div style={{ color: "#78716C", fontSize: "0.76rem" }}>
                    {rev.location}
                  </div>
                </div>

                <span style={{ fontSize: "0.73rem", color: "#A8A29E", whiteSpace: "nowrap", flexShrink: 0 }}>
                  {rev.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .review-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(30, 28, 26, 0.08) !important;
        }
      `}</style>
    </section>
  );
}
