"use client";

import React from "react";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sunita Kapoor",
      location: "Greater Kailash, New Delhi",
      occasion: "Diwali 360° Deep Clean",
      text: "Every year before Diwali, cleaning our ancestral kothi was exhausting. Har Ghar Safai’s crew arrived punctually at 8 AM with heavy-duty German vacuum and steam equipment. What touched me most was how beautifully they polished all our brass pooja thalis and diyas without me even asking! Total Lakshmi Pujan perfection.",
      rating: 5,
      date: "October 2026",
    },
    {
      name: "Rajesh & Meera Mittal",
      location: "Juhu, Mumbai",
      occasion: "Shaadi Pre-Wedding Villa Polish",
      text: "We hosted both our daughter's Mehendi and Sangeet at home with over 150 guests coming in and out. The Italian marble crystallization they did made the entire floor look like a ballroom mirror. Best of all, their post-wedding recovery team cleaned all confetti and food stains the very next morning!",
      rating: 5,
      date: "October 2026",
    },
    {
      name: "Dr. Arvind Rao",
      location: "Indiranagar, Bengaluru",
      occasion: "Full Home Deep Sanitization",
      text: "I was particular about chemical smells because we have twin toddlers and two golden retrievers. Har Ghar Safai used 100% natural citrus enzymes. The home smelled crisp like fresh lemons and clean linen, without an ounce of chlorine or harsh fumes. Outstanding professionalism.",
      rating: 5,
      date: "September 2026",
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
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(217, 119, 6, 0.1)",
              color: "#B45309",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "12px",
            }}
          >
            <Sparkles size={13} />
            <span>Client Praise & Trust</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#1E1C1A",
              lineHeight: "1.2",
              marginBottom: "12px",
            }}
          >
            Loved By Families Across <em>India</em>
          </h2>

          <p style={{ color: "#66615C", fontSize: "0.98rem" }}>
            Over 4,800+ five-star reviews from homeowners celebrating life’s grandest moments.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "28px",
          }}
        >
          {reviews.map((rev, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "32px 28px",
                border: "1px solid rgba(214, 184, 160, 0.45)",
                boxShadow: "0 10px 30px rgba(30, 28, 26, 0.04)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Occasion Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#D97706",
                  backgroundColor: "#FEF3C7",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  marginBottom: "16px",
                  alignSelf: "flex-start",
                }}
              >
                <Sparkles size={12} />
                <span>{rev.occasion}</span>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", color: "#F59E0B", marginBottom: "16px" }}>
                {[...Array(rev.rating)].map((_, s) => (
                  <Star key={s} size={16} fill="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: "0.94rem",
                  color: "#44403C",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                &ldquo;{rev.text}&rdquo;
              </p>

              {/* Author footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.98rem",
                      color: "#1E1C1A",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>{rev.name}</span>
                    <span title="Verified Customer" style={{ display: "inline-flex" }}>
                      <CheckCircle2 size={15} color="#10B981" />
                    </span>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#78716C" }}>
                    {rev.location}
                  </div>
                </div>

                <span style={{ fontSize: "0.75rem", color: "#A8A29E" }}>
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
